function pigIt(str){
  return str.split(" ").map(elem => elem.slice(1) + elem[0] + "ay").join(" ")
}
