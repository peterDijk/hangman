export const LOADING = 'LOADING'
export const DONE = 'DONE'
export function loading(isIt) {
  if (isIt) return { type: LOADING }
  return { type: DONE }
}