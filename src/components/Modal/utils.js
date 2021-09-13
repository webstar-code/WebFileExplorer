import { root } from "../../apis";

function searchNode(value, node = root) {
        if(node.name === value) return node;

        if (node.nextSibling) {
            return searchNode(value, node.nextSibling,);
        }
        if (node.firstChild) {
            return searchNode(value, node.firstChild,);
        }
        return null;
}



// Check if File name already exists
export function check_if_exists(root, value) {
    if (root.name == value) return true;
    if (root.nextSibling) {
        return check_if_exists(root.nextSibling, value);
    }
    if (root.firstChild) {
        return check_if_exists(root.firstChild, value);
    }
    return false;
}

export function renameFile(oldName, newName) {
    let node = searchNode(oldName);
    node.name = newName;
    return node;
}