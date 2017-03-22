// Add a link to the Redux state
export function addLinkToHistory(url) {
  return {
    type: 'ADD_SHORTED',
    payload: url
  }
}
// Query the api/stat to get the details for a shortened link
export function fetchLinkStats(link) {
  return new Promise((resolve, reject) =>
    fetch(`/api/${link.shortcode}/stats`)
    .then(response => response.json())
    .then(data => {
      resolve(data)
    })
    .catch(error => {
      reject(error)
    }))
}

// Retrieve all the links and check if they already have the stats, if not
// query them
export function fetchHistory() {
  return dispatch => {
    return fetch("/api/")
    .then(response => response.json())
    .then(data => {
      data.map( link => {
        return fetchLinkStats(link).then(result => {
          let shortedInfo = Object.assign({}, link, result)
          return dispatch(addLinkToHistory(shortedInfo))
        })
      })
      //
    })
    .catch((error) => {
      // TODO: Handle error
    })
  }
}

// Delete the database and the state
export function deleteHistory() {
  return dispatch => {
    fetch("/api/delete")
    .then(response => response.json())
    .then(data => {
      return dispatch({type: 'DELETE_HISTORY', payload: data})
    })
    .catch((error) => {
      // TODO: Handle error
    })
  }
}
