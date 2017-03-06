function createPhoneNumber(numbers){
  let newNums = numbers.map(elem => elem.toString())
  return `(${newNums[0]+newNums[1]+newNums[2]}) ${newNums[3]+newNums[4]+newNums[5]}-${newNums[6]+newNums[7]+newNums[8]+newNums[9]}`
}