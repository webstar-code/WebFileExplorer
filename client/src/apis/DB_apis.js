let url = 'http://localhost:5000';

export function getData() {
    fetch(`${url}/getData`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}


export function insertDB(newNode) {
    let data_DB = {
        id: newNode.id,
        name: newNode.name,
        dateCreated: newNode.dateCreated,
        extension: newNode.extension,
        type: newNode.type,
        children: '[]'
    }

    fetch(`${url}/insert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_DB),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export function renameDB(node) {
    let data_DB = {
        id: node.id,
        name: node.name,
    }

    fetch(`${url}/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_DB),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success Rename:', data);
        })
        .catch((error) => {
            console.error('Error rename:', error);
        });
}

export function updateNodeChildren(newNode, childID) {
    let data_DB = {
        id: newNode.id,
        name: newNode.name,
        dateCreated: newNode.dateCreated,
        extension: newNode.extension,
        type: newNode.type,
        children: newNode.children.push(childID)
    }

    console.log("parent", data_DB);

    fetch(`${url}/updateNode`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_DB),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export function deleteDB(id) {

    fetch(`${url}/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success Rename:', data);
        })
        .catch((error) => {
            console.error('Error rename:', error);
        });
}