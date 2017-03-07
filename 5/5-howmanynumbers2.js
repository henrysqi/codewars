function maxSumDig(nmax, maxsm) {
    var satisfies = [];
    var count = 0;
    var closestMean = 0;
    
    for (var i = 1000; i <= nmax; i++){
    	var numstring = i.toString();
    	var passes = true;
    	for (var j = 0; j < numstring.length-3; j++){
    		var sum = Number(numstring.charAt(j)) + Number(numstring.charAt(j+1)) + Number(numstring.charAt(j+2)) + Number(numstring.charAt(j+3));
    		if (sum > maxsm){
    			passes = false;
    			break;
    		} 
    	}
    	if (passes){
    		satisfies.push(i);
    		count++;
    	}
    }
    
    var totalSum = satisfies.reduce(function(a,b){
    	return a+b;
    });
    
    var mean = totalSum / satisfies.length;
    var smallestDif = false;
    satisfies.forEach(function(elem){
    	var dif = Math.abs(mean - elem)
    	if (dif < smallestDif || smallestDif === false){
    		smallestDif = dif;
    		closestMean = elem;
    	}
    });

    return [count, closestMean, totalSum];
}
