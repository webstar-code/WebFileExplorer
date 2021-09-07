import React, { useContext, useState } from 'react';
import { root } from '../../apis/index.js';
import ReactContext from '../../context.js';
import {Close as CloseSvg} from '../../assests';
import {
    Container, Header, Body, Footer, Title, Close, Button, Content,
    Label, Select, Option, Pane, Input
} from './ModalStyles.js'
import { SearchNode } from '../../apis/utils.js';

export const Modal = ({modal, setModalState}) => {
    const context = useContext(ReactContext);
    const [newNodeData, setnewNodeData] = useState({ name: '', extension: '', type: '' });

    if (!modal.show) {
        return null;
    }

    function check_if_exists(root, value) {
        if(root.name == value) return true;
        if (root.nextSibling) {
            return check_if_exists(root.nextSibling, value);
        }
        if (root.firstChild) {
            return check_if_exists(root.firstChild, value);
        }
        return false;
    }
   
    

    function addNewNode() {
        context.selected.insert(newNodeData);
        // to re-render all the folders
        context.setFolders([root]);
    }

    function handleOnClick() {
        if(check_if_exists(context.selected, newNodeData.name)) {
            alert("File name already exists.");
            return;
        }
        addNewNode();
        setModalState({show: false, title: ''});
    }

    return (
        <Container>
            <Content>
                <Header>
                    <Title>New {modal.title}</Title>
                    <Close src={CloseSvg} onClick={() => setModalState({ show: false, title: '' })} />
                </Header>
                <Body>
                    <Pane>
                        <Label>{modal.title} Name: </Label>
                        <Input onChange={(el) => setnewNodeData({ name: el.target.value, extension: newNodeData.extension, type: modal.title })}></Input>
                    </Pane>
                    {modal.title === 'File' ?
                        <Pane>
                            <Label>Save as</Label>
                            <Select name="Extension" id="extension" onChange={(el => setnewNodeData({ name: newNodeData.name, extension: el.target.value, type: modal.title }))}>
                                <Option value=".txt">Plain text</Option>
                                <Option value=".cpp">cpp</Option>
                                <Option value=".html">HTML file</Option>
                                <Option value=".js">javascript</Option>
                            </Select>
                        </Pane>
                        : null}
                </Body>
                <Footer>
                    <Button onClick={() => handleOnClick()}>Create</Button>
                </Footer>
            </Content>
        </Container>
    )
}