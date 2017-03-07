function productFib(prod){
  let result = [0,1]
  let i = 2
  if (prod < 0){
    return "negative prod"
  }
  while (true){
    let currentProd = result[i-1] * result[i-2]
    if (currentProd === prod){
      return [result[i-2], result[i-1], true]
    } else if (currentProd > prod) {
      return [result[i-2], result[i-1], false]
    } else {
      let currentPair = result[i-1] + result[i-2]
      result.push(currentPair)
      i++
    }
  }
}
