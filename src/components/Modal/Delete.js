import React, { useContext } from 'react';
import ReactContext from '../../context';
import { Body, Content, Header, Button, Label, Title, Footer, Close } from './ModalStyles';
import { Close as CloseSvg } from '../../assests';
import { root } from '../../apis';

const Delete = ({ modalState, setModalState }) => {
    const context = useContext(ReactContext);

    function deleteNode(node) {
        if (node == null) return;

        if (node.nextSibling === context.selected) {
            node.nextSibling = node.nextSibling.nextSibling;
            return node;
        }

        if (node.firstChild === context.selected) {
            node.firstChild = node.firstChild.nextSibling;
            return node;
        }
        deleteNode(node.firstChild);
        deleteNode(node.nextSibling);
    }

    function handleOnClick() {
        let parentNode = deleteNode(root);
        context.setSelected(parentNode);
        // to re-render all the folders
        context.setFolders([root]);
        setModalState({ ...modalState, show: false });
    }

    return (
        <Content>
            <Header>
                <Title>Delete {context.selected.name}.{context.selected.extension}</Title>
                <Close src={CloseSvg} onClick={() => setModalState({ ...modalState, show: false })} />
            </Header>
            <Body>
                <Label>Are you sure you want to Delete {context.selected.name}.{context.selected.extension}</Label>
            </Body>
            <Footer>
                <Button onClick={() => setModalState({ ...modalState, show: false })}>Cancel</Button>
                <Button onClick={() => handleOnClick()}>Delete</Button>

            </Footer>
        </Content>
    )
}

export default Delete;