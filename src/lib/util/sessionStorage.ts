const createSessionKey = (key: string): string => {
  return `MM_STORE:${key}`
}

export const setItem = (key: string, item: any | null): void => {
  if (!item) {
    return
  }
  sessionStorage.setItem(createSessionKey(key), JSON.stringify(item))
}

export const getItem = (key: string): any | null => {
  const item = sessionStorage.getItem(createSessionKey(key))
  return item ? JSON.parse(item) : null
}
