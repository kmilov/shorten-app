export default function(state = [], action) {
  switch (action.type) {
    case "ADD_SHORTED":
      return [...state, {
        shortcode: action.payload.shortcode,
        link: action.payload.link,
        _id: action.payload._id
      }]
    case "POPULATE_HISTORY":
      return [...state, ...action.payload]
    case "DELETE_HISTORY":
      return []

    default:
      return state
  }
}
