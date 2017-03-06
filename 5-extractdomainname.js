function domainName(url){
  console.log(url)
  var dstart1 = "http://";
  var dstart2 = "http://www.";
  var dstart3 = "https://";
  var dstart4 = "https://www.";
  var dstart5 = "www.";
  
  if (url.includes(dstart4)){
  	var domainstart = url.slice(dstart4.length)
  	return domainstart.slice(0, domainstart.indexOf('.'))
  }
  if (url.includes(dstart2)){
  	var domainstart = url.slice(dstart2.length)
  	return domainstart.slice(0, domainstart.indexOf('.'))
  }
  if (url.includes(dstart1)){
  	var domainstart = url.slice(dstart1.length)
  	return domainstart.slice(0, domainstart.indexOf('.'))
  }
  if (url.includes(dstart3)){
  	var domainstart = url.slice(dstart3.length)
  	return domainstart.slice(0, domainstart.indexOf('.'))
  }
  if (url.includes(dstart5)){
	var domainstart = url.slice(dstart5.length)
	return domainstart.slice(0, domainstart.indexOf('.'))
  }
  return url.slice(0, url.indexOf('.'))
}
