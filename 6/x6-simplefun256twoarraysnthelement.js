function twoArraysNthElement(array1, array2, n) {
  let stitched = []
  while (stitched.length <= n) {
  	if (!array1.length) {
  		stitched = stitched.concat(array2)
  		break
  	} 
  	if (!array2.length) {
  		stitched = stitched.concat(array1)
  		break
  	}
    if (array1[0] < array2[0]) {
      stitched.push(array1.shift())
    } else {
      stitched.push(array2.shift())
    }
  }
  return stitched[n]
}
/*
function twoArraysNthElement(array1, array2, n) {
  let union = array1.concat(array2)
	return union.sort((a,b)=>a-b)[n]
}
