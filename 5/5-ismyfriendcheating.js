function removeNb (n) {
  var sum = n*(n+1)/2;
  // sum - a - b = ab
  // sum - a = ab + b
  // sum - a = b(a + 1)
  var result = []
  for (var a = 1; a <= n; a++){
    var b = (sum - a) / (a + 1);
    if (b % 1 === 0 && b <= n) {
      result.push([a,b])
    }
  }
  return result
}
