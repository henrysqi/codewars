snail = function(matrix) {
  var result = [];
  var copy = Array(matrix.length).fill(Array(matrix.length));
  var currentCoord = [0,0];
  while (true) {
    var traveled = [true, true, true, true];
    var x = currentCoord[0];
    var y = currentCoord[1];

    // move right
    for (var i = x; i < matrix[y].length; i++) {
      if (!copy[x,y]) {
        copy[x,y] = true
        currentCoord = [i, y];
        result.push(matrix[y][x])
      } else {
        traveled[0] = false;
        break;
      }
    }

    // move down

    return result;
  }
}