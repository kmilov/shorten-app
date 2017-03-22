export function addShortedToHistory(url) {
  return {
    type: 'ADD_SHORTED',
    payload: {
      shortcode: url.shortcode,
      link: url.link,
      _id: url._id
    }
  }
}


export function fetchHistory() {
  return dispatch => {
    fetch("/api/")
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'POPULATE_HISTORY', payload: data})
    })
    .catch((error) => {
      // TODO: Handle error
    })
  }
}

export function deleteHistory() {
  return dispatch => {
    fetch("/api/delete")
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'DELETE_HISTORY', payload: data})
    })
    .catch((error) => {
      // TODO: Handle error
    })
  }
}
