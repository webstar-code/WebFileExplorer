import React, { useContext, useEffect, useState } from 'react';
import { Container, Input, Icon, IconContainer} from './MenuStyles';
import {Add_File} from '../../assests/index'
import { Modal, Search } from '../../components';
import ReactContext from '../../context';
import {root} from '../../apis';

export const Menu = (props) => {
    const context = useContext(ReactContext);
    const [currentPath, setcurrentPath] = useState('');
    const [modalstate, setModalState] = useState({
        show: false,
        title: ''
    })

    useEffect(() => {
        let items = [];
        shortestPathToNode(root, context.selected, items);
        items.push(root);
        items.reverse();
        let temp = '';
        for(let i = 0; i < items.length; i++) {
            // when i do temp += items[i].name + '/' weired stuff happend. The items[i].name is appedend with '/'
            temp += items[i].name;
            temp+= '/';
        }
        setcurrentPath(temp);
    }, [context.selected]);


    return(
        <Container>
            <Modal state={modalstate} setState={setModalState} />
            <Input type="text" placeholder="/root" width='50%' disabled={true} value={currentPath} ></Input>
            <Search setFolders={props.setFolders} />
            <IconContainer>
                <Icon src={Add_File} onClick={() => setModalState({show: true, title: 'New File'})}></Icon>
                <Icon src={Add_File}></Icon>
                <Icon src={Add_File}></Icon>
                <Icon src={Add_File}></Icon>

            </IconContainer>
        </Container>
    )
}
function shortestPathToNode(root, node, items) {
    if(root === null) return 0;

    if(root.id === node.id) {
        return 1;
    }

    let temp = root.firstChild;
    while(temp) {
        let result = shortestPathToNode(temp, node, items);
        if(result !== 0) {
            items.push(temp);
            return result;
        }
        temp = temp.nextSibling;
    }
    return 0;
}

