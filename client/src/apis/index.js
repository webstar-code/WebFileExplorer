
let url = 'http://localhost:5000';


export class Node {
    constructor({ ...l_data }) {
        this.id = Date.now();
        this.name = l_data.name;
        this.size = '';
        this.dateCreated = new Date().toDateString().slice(4);
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
        this.children.push(newNode.id);
        // update the DB
        return newNode;

        
    }

    rename(newName) {
        this.name = newName;
        return this;
    }

    delete = function () {

    }
}



export function find_from_data(id) {
    const data = {
        ID: id
    }
    console.log(data);
    fetch(`${url}/getNode`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.error('Error Retreive:', error);
        });
}


export function Construct(root) {
    if (root === null) return;

    if (root.children) {
        console.log(root);
        for(let i = 0; i < root.children.length; i++) {
            root.insert(find_from_data(root.children[i].id));
        }
    }
    Construct(root.firstChild);
    Construct(root.nextSibling);

}


// let rooData = find_from_data(0);
// console.log(rooData);

let root = new Node(find_from_data(0));
Construct(root);



export { root };

