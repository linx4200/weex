export default function router (state = [], action) {
  switch (action.type) {
    case 'ROUTE_INITIAL':
      return [
        action.page,
        ...state
      ]
    case 'ROUTE_PUSH':
      return [
        action.page,
        ...state
      ]
    case 'ROUTE_POP':
      const newState = state
      newState.shift()
      return newState
    default:
      return state
  }
}
