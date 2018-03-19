// This is here as documentation. The nodes in the tree are instances of
// this class. You don't need to change this implementation.
class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const isBST = node => {
    var result = []
    var direction;
    var goodTree = true

    function doInOrder(node) {
        if (!node) {
            return
        }
        if (node.left) {
            doInOrder(node.left)
        }
        if (node.value) {
            result.push(node.value)
            if (!direction) {
                if (result[result.length-1] < result[result.length-2]) {
                    direction = "desc"
                } else if (result[result.length-1] > result[result.length-2]) {
                    direction = "asc"
                }
            } else {
                if (direction === "desc" && result[result.length-1] > result[result.length-2]) {
                    goodTree = false
                    return
                }
                if (direction === "asc" && result[result.length-1] < result[result.length-2]) {
                    goodTree = false
                    return
                }
            }
        }
        if (node.right) {
            doInOrder(node.right)
        }
    }
    doInOrder(node)
    console.log(result)
    return goodTree
};