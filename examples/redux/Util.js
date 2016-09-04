export function assert (expr, failDescription) {
  if (!expr) {
    throw new Error(`[router] ${failDescription}`)
  }
}

export default {
  assert
}
