export default function(state = [], action) {
  switch (action.type) {
    case "ADD_SHORTED":
      return [...state, action.payload]
    case "DELETE_HISTORY":
      return []
    default:
      return state
  }
}
