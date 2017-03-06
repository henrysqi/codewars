function shoot(x){

	var p1 = 0;
	var p2 = 0;
	
	var points = {
		XX: 2,
		XO: 1,
		OX: 1,
		OO: 0
	}
	
	var dblpoints = {
		XX: 4,
		XO: 2,
		OX: 2,
		OO: 0
	}
	
	for (var i = 0; i < x.length; i++){
	  if (x[i][1] === true){
		p1 += dblpoints[x[i][0].P1]
		p2 += dblpoints[x[i][0].P2]		
	  } else {
		p1 += points[x[i][0].P1]
		p2 += points[x[i][0].P2]	
	  }
	  console.log(p1, p2)
	}

	if (p1 > p2){
		return "Pete Wins!";
	} else if (p2 > p1) {
		return "Phil Wins!";
	} else {
		return "Draw!";
	}

}