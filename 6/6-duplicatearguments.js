function solution(){
	let args = Array.prototype.slice.call(arguments)
	let seen = {};
	for (let i = 0; i < args.length; i++) {
		if (!seen[args[i]]) {
			seen[args[i]] = true;
		} else {
			return true
		}
	}
	return false;
}