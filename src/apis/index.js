import { Construct, find_from_data } from './utils';

export class Node {
    constructor({...l_data}) {
        this.id = l_data.id ? l_data.id : Date.now();
        this.name = l_data.name;
        this.size = '';
        this.DateAdded = new Date().toDateString().slice(4);
        this.type = l_data.type;
        this.extension = l_data.extension ? l_data.extension : '';
        this.children = l_data.children || [];
    
        this.firstChild = null;
        this.nextSibling = null;
    }

    insert(data) {
        let newNode = new Node(data);

        if(!this.firstChild) {
            this.firstChild = newNode;
        }else{
            let temp = this.firstChild;
            while(temp.nextSibling) {
                temp = temp.nextSibling;
            }
            temp.nextSibling = newNode;
        }
        this.children.push(data.id);
        // update the DB
    }


    delete = function() {

    }
}



let root = new Node(find_from_data(0));
Construct(root);



export {root};

