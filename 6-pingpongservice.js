function service(score){
  var scores = score.split(":");
  var total = (Number(scores[0])+Number(scores[1]));
  console.log(scores)
	if (total < 40){
  	return Math.floor(total / 5) % 2 === 0 ? "first" : "second";
	} else {
  	return Math.floor(total /2) % 2 === 0 ? "first" : "second";
	}
}