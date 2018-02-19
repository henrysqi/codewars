// Defuse all of the Bombs!
Bomb.diffuse( 42);
Bomb.diffuse("just keep trying")
Bomb.diffuse("just keep trying")
Bomb.diffuse("just keep trying")
Bomb.diffuse("just keep trying")
Bomb.diffuse("just keep trying")
Bomb.diffuse(BombKey)
function diffuseTheBomb() {
  return true
}
Bomb.diffuse(diffuseTheBomb)
Bomb.diffuse(3.14159)
var date = new Date();
Bomb.diffuse(new Date(new Date().setFullYear(new Date().getFullYear() - 4)))
var obj = {key:43}
Bomb.diffuse(Object.freeze(obj))
var obj = Object.create(Object)
obj.val = 9;
obj.prototype.valueOf = function() {
	var temp = this.val;
	this.val = this.val + 2;
	return temp;
}
Bomb.diffuse(obj);
Math.prototype = {};
Math.prototype.evaled = false;
Math.random = function() {
  if (!this.evaled) {
    this.evaled = true;
    return 0.5;
  } else {
    return 1;
  }
}
Bomb.diffuse(42)
Array.prototype.valueOf = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i]
  }
  return sum;
}
Bomb.diffuse("eWVz")