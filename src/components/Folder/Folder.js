import React, { useContext, useState } from 'react';
import { Down_Arrow, Right_Arrow } from '../../assests/index'
import ReactContext from '../../context';
import { Container, Icon, Text, Child, Pane } from './FolderStyles';


function PrintTree(root) {
    if (root === null) return;
    let items = [];
    let temp = root.firstChild;
    while (temp) {
        items.push(temp);
        temp = temp.nextSibling;
    }
    return items;
}

export const Folder = (props) => {
    const context = useContext(ReactContext);
    const [open, setOpen] = useState(false);
    let root = props.root;

    let children = PrintTree(root);

    const handleOnClick = () => {
        setOpen(!open);
        console.log(open);
    }

    const changeSelected = () => {
        context.setSelected(root);
        console.log(context.selected);
    }
    return (
        <Container>
            <Pane onClick={() => handleOnClick()} bgcolor={context.selected.name == root.name ? '#03a9f44f' : 'none'}>
                {open ?
                    <Icon src={Down_Arrow} />
                    :
                    <Icon src={Right_Arrow} />
                }
                <Text onClick={() => changeSelected()}>{root.name}</Text>
            </Pane>
            {open ? 
            <Child>
                {children.map((el) => {
                    return <Folder root={el} />
                })}
            </Child>
            : null }

        </Container>
    )
}

