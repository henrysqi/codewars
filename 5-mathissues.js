Math.round = function (number) {
  
  if (!(number % 1)) {
    return number;
  } else {
    var numstring = number.toString();
    return Number(numstring.charAt(numstring.indexOf(".") + 1)) >= 5 ? Math.ceil(number) : Math.floor(number);
  }
};

Math.ceil = function(number) {
  if (number === 0){
    return 0
  }
  if (number < 1){
    return 1
  }
  var numstring = number.toString()
  if (numstring.includes(".")){
    var sections = numstring.split(".")
    return Number(sections[0])+1
  } else {
    return number
  }
  
};

Math.floor = function(number) {
  if (number < 1){
    return 0
  }
  var numstring = number.toString()
  if (numstring.includes(".")){
    var sections = numstring.split(".")
    return Number(sections[0])
  } else {
    return number
  }
};