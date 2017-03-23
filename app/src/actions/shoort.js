import {fetchLinkStats, addLinkToHistory} from './history'

export function setInProgress(action){
  return {
    type: "SHORT_IN_PROGRESS"
  }
}

export function setFinished(action){
  return {
    type: "SHORT_FINISHED"
  }
}

// Set an error in the shoort state
export function addFetchError(error){
  return {
    type: 'SET_ERROR',
    payload: error
  }
}

// Short an URL through the internal proxy
// Call the stats for the new url
// Populate the history STATE through addShortenToHistory
export function shoooort(url) {
  return dispath => {
    dispath(setInProgress())
    return fetch("/api/shorten", {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({url: url})
    })
    .then(response => response.json())
    .then(data => {
      fetchLinkStats(data)
        .then(result => {
          let _url = Object.assign({}, data, result)

          dispath(addLinkToHistory(_url))
          dispath(setFinished())
        })
        .catch(error => {
          return dispath(addFetchError(error))
        });
    })
    .catch(error => {
      return dispath(addFetchError(error))
    })
  }
}
