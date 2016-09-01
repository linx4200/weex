const pages = {
  page1: false,
  page2: false
}

export default function router(state = pages, action) {
  switch (action.type) {
    case 'ROUTE':
      return {
        ...pages,
        ...{
          [action.page]: true
        }
      }
    default:
      return state
  }
}
