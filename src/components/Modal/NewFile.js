import React, { useContext, useState } from 'react';
import { root } from '../../apis';
import ReactContext from '../../context';
import {Close as CloseSvg} from '../../assests';

import { Body, Button, Content, Footer, Header, Input, Label, Pane, Select, Title, Close, Option } from './ModalStyles';


const NewFile = ({ modalState, setModalState }) => {
    const context = useContext(ReactContext);
    const [newNodeData, setnewNodeData] = useState({ name: '', extension: '', type: modalState.type });

    // Check if File name already exists
    function check_if_exists(root, value) {
        if (root.name == value) return true;
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
        if (check_if_exists(context.selected, newNodeData.name)) {
            alert("File name already exists.");
            return;
        }
        addNewNode();
        setModalState({ ...modalState, show: false });
    }


    return (
        <Content>
            <Header>
                <Title>New File</Title>
                <Close src={CloseSvg} onClick={() => setModalState({...modalState, show: false})} />
            </Header>
            <Body>
                <Pane>
                    <Label>File Name: </Label>
                    <Input onChange={(el) => setnewNodeData({ ...newNodeData, name: el.target.value })} required={true}></Input>
                </Pane>
                <Pane>
                    <Label>Save as</Label>
                    <Select name="Extension" id="extension" onChange={(el => setnewNodeData({...newNodeData, extension: el.target.value }))} required={true}>
                        <Option value=".txt">Plain text</Option>
                        <Option value=".cpp">cpp</Option>
                        <Option value=".html">HTML file</Option>
                        <Option value=".js">javascript</Option>
                    </Select>
                </Pane>
            </Body>
            <Footer>
                <Button onClick={() => handleOnClick()}>Create</Button>
            </Footer>
        </Content>

    )
}

export default NewFile;