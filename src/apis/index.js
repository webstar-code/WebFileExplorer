import data from '../data.json';

export class Node {
    constructor({ ...l_data }) {
        this.id = l_data.id ? l_data.id : new Date().getTime();
        this.name = l_data.name;
        this.size = '';
        this.dateCreated = l_data.dateCreated || new Date().toDateString().slice(4);
        this.type = l_data.type;
        this.extension = l_data.extension ? l_data.extension : '';
        this.children = l_data.children || [];

        this.firstChild = null;
        this.nextSibling = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (!this.firstChild) {
            this.firstChild = newNode;
        } else {
            let temp = this.firstChild;
            while (temp.nextSibling) {
                temp = temp.nextSibling;
            }
            temp.nextSibling = newNode;
        }
        // this.children.push(newNode.id);
        return newNode;
    }

    rename(newName) {
        this.name = newName;
        return this;
    }

}



// export async function find_from_data(id) {
//     const data = {
//         ID: id
//     }
//     return fetch(`${url}/getNode`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//         .then(response => response.json())
//         .then(data => {
//             return data
//         })
//         .catch((error) => {
//             console.error('Error Retreive:', error);
//         });
// }


function find_from_ldata(id) {
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === id) {
            return data[i];
        }
    }
}


export function Construct(root) {
    if (root === null) {
        return;
    }else{
        if (root.children) {
            for (let i = 0; i < root.children.length; i++) {
                let x = find_from_ldata(root.children[i]);
                console.log(x);
                root.insert(find_from_ldata(root.children[i].id));
            }
        }
        Construct(root.firstChild);
        Construct(root.nextSibling);
    }
    return root;
}


let rootNode  = new Node(find_from_ldata(0));
Construct(rootNode);

export { rootNode };

