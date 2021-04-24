export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
<<<<<<< HEAD

export const showElements = arr => {
  if (arr) {
    return arr.map(el => {
      return el.name;
    })
  }
}
=======
>>>>>>> 70e2da7c0f9c5555158469f361e1a8ac2c012d34
