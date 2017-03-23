import {fetchLinkStats, addLinkToHistory} from './history'


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
  return function(dispath) {
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
          return dispath(addLinkToHistory(_url))
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
