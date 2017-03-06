function lastDigit(str1, str2){  
	if (str2 === "0"){
    return 1;
  }
  let pattern = [
  	[0,0,0,0],
  	[1,1,1,1],
  	[2,4,8,6],
  	[3,9,7,1],
  	[4,6,4,6],
  	[5,5,5,5],
  	[6,6,6,6],
  	[7,9,3,1],
  	[8,4,2,6],
  	[9,1,9,1]]
  let position = str2.slice(-2) % 4
  position ? position -= 1 : position = 3;
  	
  return pattern[str1[str1.length-1]][position]
}