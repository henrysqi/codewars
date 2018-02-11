var solved = false;
function loop_size(node) {
    if (solved) {
      solved = false;
      return;
    }
    var counter = 0;
    var currentNode = node;
    var nextNode = node.next;
    while(true) {
        currentNode.seen = true;
        currentNode.value = parseInt(counter);
        if (nextNode.seen === true) {
          solved = true;
          return currentNode.value - nextNode.value + 1;
        } 
        currentNode = nextNode;
        nextNode = nextNode.next;
        counter++;
    }
}