/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.

function preOrder(node)
{
    var result = []

    function doPreOrder(node) {
    if (node.data) {
        result.push(node.data)
    }
    if (node.left) {
        doPreOrder(node.left)
    }
    if (node.right) {
        doPreOrder(node.right)
    }
    }

    doPreOrder(node)
    return result
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node)
    {
    var result = []

    function doInOrder(node) {
    if (node.left) {
        doInOrder(node.left)
    }
    if (node.data) {
        result.push(node.data)
    }
    if (node.right) {
        doInOrder(node.right)
    }
    }

    doInOrder(node)
    return result
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node)
{
    var result = []

    function doPostOrder(node) {
        if (node.left) {
            doPostOrder(node.left)
        }
        if (node.right) {
            doPostOrder(node.right)
        }
        if (node.data) {
            result.push(node.data)
        }
    }

    doPostOrder(node)
    return result
}