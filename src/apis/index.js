import { Construct, find_from_data } from './utils';

function Node({...l_data}) {
    this.name = l_data.name;
    this.id = l_data.id;
    this.children = l_data.children;

    this.firstChild = null;
    this.nextSibling = null;
}


let root = new Node(find_from_data(0));

Construct(root);



export {root};

