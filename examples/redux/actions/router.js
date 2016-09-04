export const push = (page) => {
  return {
    type: 'ROUTE_PUSH',
    page
  }
}

export const pop = (filter) => {
  return {
    type: 'ROUTE_POP'
  }
}

export const initial = (page) => {
  return {
    type: 'ROUTE_INITIAL',
    page
  }
}
