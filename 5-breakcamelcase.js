// complete the function
function solution(string) {
  let answer = "";
  for (let i = 0; i < string.length; i++){
    if (string[i] === string[i].toUpperCase()){
        answer += " "
    }
    answer += string[i]
  }
  return answer;
}
