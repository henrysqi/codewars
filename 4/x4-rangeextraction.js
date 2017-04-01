function solution(list){
  let result = "";
  let temp = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i+1] === list[i]+1) {
      temp.push(list[i])
    } else {
      if (temp.length < 3) {
        
      } else if (temp.length >= 3) {
      
      }else {
        result += list[i].toString() + ","
      }
    }
  }
}

