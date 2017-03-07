function rot13(message){
  let result = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === message[i].toLowerCase()) {
      result += get13(message[i])
    } else {
      result += get13(message[i].toLowerCase(), 'upper');
    }
  }
  return result;
}

function get13(letter, whichCase) {
  let alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alpha.length; i++) {
    if (alpha[i] === letter) {
      if (whichCase === 'upper') {
        return alpha[i+13].toUpperCase();
      } else {
        return alpha[i+13]
      }
    }
  }
  return letter;
}