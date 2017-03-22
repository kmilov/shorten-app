import {addShorten} from './history'

export function shoooort(url) {
  return function(dispath) {
    dispath({type: 'SHORT_IN_PROGRESS'})
    fetch("/api/shorten", {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({url: url})
    })
    .then((response) => response.json())
    .then((data) => {
      dispath(addShorten({
        shoort: data.shortcode,
        reallink: url,
      }))
      //
      dispath({type: 'SHORT_FINISHED'})
    })
    .catch((error) => {
      dispath({type: 'SHORT_ERROR', payload: error})
    })
  }
}
