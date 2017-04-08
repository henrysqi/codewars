String.prototype.isAudio= function(){
  let accepted = [".mp3",".flac", ".alac", ".aac"]
  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let dotIndex = this.indexOf(".")
  if (accepted.includes(this.slice(dotIndex, this.length))) {
  	for (let i = 0; i < dotIndex; i++) {
	  	if (!letters.includes(this[i])) {
	  		return false;
	  	}
	  }	
	  return true;
  } else {
  	return false
  }
  
};
String.prototype.isImage= function(){
  let accepted = [".jpg", ".jpeg", ".png", ".bmp", ".gif"]
  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let dotIndex = this.indexOf(".")
  if (accepted.includes(this.slice(dotIndex, this.length))) {
  	for (let i = 0; i < dotIndex; i++) {
	  	if (!letters.includes(this[i])) {
	  		return false;
	  	}
	  }	
	  return true;
  } else {
  	return false
  }
};