function pickPeaks(arr){
  let result = {
  	pos: [],
  	peaks: []
  }
  let checkingLastPleateau = true;
  let checkingPlateau = false;
  let plateauRighterValue = 0;
  
  for (let i = arr.length - 2; i > 0 ; i--){
  	// still checking for last plateau so we don't count peak
  	if (checkingLastPleateau) {
  		if (arr[i] !== arr[i+1]) {
  			checkingLastPleateau = false;
  		}
  	}
  	// not checking for last pleateau
  	else {
  		// if value is part of plateau
  		if (arr[i] === arr[i+1]) {
  			if (!checkingPlateau) {
  				checkingPlateau = true;
  				plateauRighterValue = arr[i+2];
  				if (arr[i-1] < arr[i] && plateauRighterValue < arr[i]) {
  					result.pos.unshift(i);
		  			result.peaks.unshift(arr[i])
  				}
  			} else {
  				if (arr[i-1] < arr[i] && plateauRighterValue < arr[i]) {
  					result.pos.unshift(i);
		  			result.peaks.unshift(arr[i]);
		  			checkingPlateau = false;
  				}
  			}
  		}
  		// if value is not part of plateau
  		else {
  			if (arr[i-1] < arr[i] && arr[i+1] < arr[i]){
		  		result.pos.unshift(i);
		  		result.peaks.unshift(arr[i])
		  	}
  		}
  	}
  }
  return result;
}