export function addToLocal(url){
  // body...
}

export function addShorten(url) {
  return {
    type: 'ADD_SHORTEN',
    payload: {
      shoort: url.shoort,
      reallink: url.reallink
    }
  }
}
