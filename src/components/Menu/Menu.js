import React, { useContext, useEffect, useState } from 'react';
import { Container, Input, Icon, IconContainer} from './MenuStyles';
import {Add_File, Add_Folder, Trash, Edit_File} from '../../assests'
import { Modal, Search } from '../index';
import ReactContext from '../../context';
import {root} from '../../apis';
import ContextMenu from '../ContextMenu/ContextMenu';

export const Menu = () => {
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
            // when i do temp += items[i].name + '/' weired stuff happens. The items[i].name is appedend with '/'
            temp += items[i].name;
            temp+= '/';
        }
        setcurrentPath(temp);
    }, [context.selected]);


    return(
        <Container>
            <ContextMenu setModalState={setModalState} />
            <Modal modalState={modalstate} setModalState={setModalState} />
            <Input type="text" placeholder="/root" width='50%' disabled={true} value={currentPath} ></Input>
            <Search />
            <IconContainer>
                <Icon src={Add_File} onClick={() => context.selected.type != 'file' ? setModalState({show: true, type: "file"}) : null} ></Icon>
                <Icon src={Add_Folder} onClick={() => context.selected.type != 'file' ? setModalState({show: true, type: "folder"}) : null} ></Icon>
                <Icon src={Trash} onClick={() => setModalState({show: true, type: "delete"})}></Icon>
                <Icon src={Edit_File} onClick={() => setModalState({show: true, type: 'rename'})}></Icon>
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

