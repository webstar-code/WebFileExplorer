import { rootNode } from "../apis";

function searchNode(value, node = rootNode) {
        if(node.name === value) return node;

        if (node.nextSibling) {
            return searchNode(value, node.nextSibling,);
        }
        if (node.firstChild) {
            return searchNode(value, node.firstChild,);
        }
        return null;
}

export function check_if_exists(root, value) {
    if (root.name === value) return true;
    if (root.nextSibling) {
        return check_if_exists(root.nextSibling, value);
    }
    if (root.firstChild) {
        return check_if_exists(root.firstChild, value);
    }
    return false;
}


export  function deleteNode(root, node) {
    if (root === null) return;
    
    if (root.nextSibling === node) {
        root.nextSibling = root.nextSibling.nextSibling;
        return root;
    }

    if (root.firstChild === node) {
        root.firstChild = root.firstChild.nextSibling;
        return root;
    }
    let x = deleteNode(root.firstChild, node);
    if(x) return x;
    return deleteNode(root.nextSibling, node);
}

export function Cut(node) {
    let temp = node;
    deleteNode(rootNode, temp);
    return temp;
}