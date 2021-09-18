import React, { useContext } from 'react';
import ReactContext from '../../context';
import { Body, Content, Header, Button, Label, Title, Footer, Close, Icon, CancelButton } from './ModalStyles';
import { Close as CloseSvg, Trash } from '../../assests';
import { root } from '../../apis';
import { deleteNode } from '../../utils.js'
import { deleteDB } from '../../apis/DB_apis';
const Delete = ({ modalState, setModalState }) => {
    const context = useContext(ReactContext);

    function handleOnClick() {
        let parentNode = deleteNode(root, context.selected);
        context.setSelected(parentNode);
        context.setFolders([root]);
        setModalState({ ...modalState, show: false });
        deleteDB(context.selected.id);
    
}

return (
    <Content>
        <Header>
            <Icon src={Trash} />
            <Title>Delete {context.selected.name}.{context.selected.extension}</Title>
            <Close onClick={() => setModalState({ ...modalState, show: false })}>
                <Icon src={CloseSvg} />
            </Close>
        </Header>
        <Body>
            <Label>Are you sure you want to Delete {context.selected.name}.{context.selected.extension}</Label>
        </Body>
        <Footer>
            <CancelButton onClick={() => setModalState({ ...modalState, show: false })}><p>Cancel</p></CancelButton>
            <Button onClick={() => handleOnClick()}><p>Delete</p></Button>
        </Footer>
    </Content>
)
}

export default Delete;