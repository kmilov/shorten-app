import {addShortedToHistory} from './history'


// Short an URL through the proxy
// then populate the history STATE through addShortenToHistory
export function shoooort(url) {
  return function(dispath) {
    fetch("/api/shorten", {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({url: url})
    })
    .then(response => response.json())
    .then(data => {
      let shortenedLink = {
        shortcode: data.shortcode,
        _id: data._id,
        link: data.link
      }
      dispath(addShortedToHistory(shortenedLink))
    })
    .catch((error) => {
      // TODO: Handle Errors
    })
  }
}
