function songDecoder(song){
  let result = "";
  let lastSawWUB = false;
  for (let i = 0; i < song.length; i++) {
  	if (song[i] === "W" && song[i+1] === "U" && song[i+2] === "B") {
  		if (i !== 0 && i !== song.length-3) {
  			if (!lastSawWUB){
  				result += " ";
  				i += 2;	
  				lastSawWUB = true;
  			} else {
          i += 2;
        }
  		} else {
  			i += 2;
  		}
  	} else {
  		result += song[i];
  		lastSawWUB = false;
  	}
  }
  
  if (song[song.length-1] === "B" && song[song.length-2] === "U" && song[song.length-3] === "W" && 
  	song[song.length-4] === "B" && song[song.length-5] === "U" && song[song.length-6] === "W"
  ) {
  	result = result.slice(0, result.length-1)
  } 
  if (song[0] === "W" && song[1] === "U" && song[2] === "B" && 
  	song[3] === "W" && song[4] === "U" && song[5] === "B"
  ) {
  	result = result.slice(1)
  } 
  
  return result;
}