export const numberWithDelimiter = (num: number): string => {
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}

export const zeroPadding = (num: number, len: number) => {
  return (Array(len).join('0') + num).slice(-len)
}
