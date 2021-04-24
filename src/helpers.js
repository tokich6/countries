export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const showElements = arr => {
  if (arr) {
    return arr.map(el => {
      return el.name;
    })
  }
}
