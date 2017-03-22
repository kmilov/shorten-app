const initialState = {
  shoorting: false,
  error: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "SHORT_IN_PROGRESS":
      return Object.assign({}, state, {shoorting: true})
    case "SHORT_FINISHED":
      return Object.assign({}, state, {shoorting: false})
    case "SHORT_ERROR":
      return Object.assign({}, state, {error: action.payload.error})
    default:
      return state
  }
}
