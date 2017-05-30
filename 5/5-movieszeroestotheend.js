var moveZeros = function (arr) {
  let arrayOfZeroes = [];
  for (let i=arr.length-1; i>=0; i--) {
    if (arr[i] === 0) {
      arrayOfZeroes.push(arr.splice(i, 1))
    }
  }
  return arr.concat(arrayOfZeroes)
}