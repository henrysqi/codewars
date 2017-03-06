String.prototype.camelCase=function(){
	return this.split(" ").map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join("")
}
