export default function(state = [], action) {
  switch (action.type) {
    case "ADD_SHORTEN":
      return state = [...state, {
        link: 'shooort.com',
        shoort: action.payload.shoort,
        reallink: action.payload.reallink
      }]
    default:
      return state
  }
}
