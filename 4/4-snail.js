snail = function(matrix) {
  var result = [];
  var copy = [];
  for(var i=0; i<matrix.length; i++) {
      copy[i] = new Array(matrix.length);
  }
  var currentCoord = [0,0];
  while (true) {
    var traveled = [false, false, false, false];

    // move right
    var y = currentCoord[0];
    var x = currentCoord[1];
    for (var i = x; i < matrix[y].length; i++) {
      if (!copy[y][i]) {
        copy[y][i] = true
        currentCoord = [y,i];
        result.push(matrix[y][i])
        traveled[0] = true;
      }
    }

    // move down
    y = currentCoord[0];
    x = currentCoord[1];
    for (var i = y+1; i < matrix.length; i++) {
      if (!copy[i][x]) {
        copy[i][x] = true
        currentCoord = [i,x];
        result.push(matrix[i][x]);
        traveled[1] = true;
      }
    }

    // move left
    var y = currentCoord[0];
    var x = currentCoord[1];
    for (var i = x-1; i >= 0; i--) {
      if (!copy[y][i]) {
        copy[y][i] = true
        currentCoord = [y,i];
        result.push(matrix[y][i]);
        traveled[2] = true;
      }
    }

    // move up
    y = currentCoord[0];
    x = currentCoord[1];
    for (var i = y-1; i >= 0; i--) {
      if (!copy[i][x]) {
        copy[i][x] = true
        currentCoord = [i,x];
        result.push(matrix[i][x]);
        traveled[3] = true;
      }
    }

    var movedAtAll = false;
    for (var i = 0; i < traveled.length; i++) {
      if (traveled[i]) {
        movedAtAll = true;
      }
    }
    if (!movedAtAll) return result;

  }
}