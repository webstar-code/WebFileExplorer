import  data from '../data.json';

export function queue() {
    this.arr = [];
    this.head = {};
    this.tail = {};

    this.push = function(node) {
        this.arr.push(node);
    }

    this.pop = function() {
        this.arr.shift();
    }

    this.top = function() {
        return this.arr[0];
    }

    this.isempty = function() {
        return this.arr.length == 0 ? true : false;
    }

}

export function PrintTree(root) {
    if(root === null) return;
    
    let q = new queue();
    q.push(root);
    let temp;

    while(!q.isempty()) {
       temp = q.top();
       while(temp) {
            if(temp.firstChild) q.push(temp.firstChild);
            console.log(temp.name);
            temp = temp.nextSibling;
        }
        q.pop();
    }
}


export function search(root, data) {
    if (root.data === data) return root;

    if (root.nextSibling) {
        return search(root.nextSibling, data);
    }
    if (root.firstChild) {
        return search(root.firstChild, data);
    }

}

export function SearchNode(root, value) {
    let name = root.name;
    if (name.search(value)) return root;

    if (root.nextSibling) {
        return search(root.nextSibling, value);
    }
    if (root.firstChild) {
        return search(root.firstChild, value);
    }
}


// export function Insert(root, data) {

//     if (root === null) return;

//     let parentNode = root;
//     if (parentNode) {
//         if (!parentNode.firstChild) {
//             parentNode.firstChild = new Node(data);
//         }else{
//             let temp = parentNode.firstChild;
//             while(temp.nextSibling) {
//                 temp = temp.nextSibling;
//             }

//             temp.nextSibling = new Node(data);
//         }
//     }else{
//         console.log("No element found");
//     }
// }

