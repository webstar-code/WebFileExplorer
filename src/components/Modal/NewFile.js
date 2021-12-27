import React, { useContext } from 'react';
import ReactContext from '../../context';
import { Add_File, Close as CloseSvg } from '../../assests';
import {
    Body, Button, Content, Footer, Header, Input, Label,
    Pane, Select, Title, Close, Option, ErrorText, Icon, CancelButton
} from './ModalStyles';
import { useForm } from 'react-hook-form';
import { check_if_exists } from '../../utils.js';
// import { insertDB, updateNodeChildren } from '../../apis/DB_apis';


const NewFile = ({ modalState, setModalState }) => {
    const context = useContext(ReactContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function addNewNode(data) {
        const newNode = context.selected.insert(data);
        // insertDB(newNode);
        // updateNodeChildren(context.selected);
        context.setFolders([context.root]);
    }

    function handleOnClick(data) {
        let newNodeData = { name: data.fileName, extension: data.fileExtension, type: modalState.type }
        addNewNode(newNodeData);
        setModalState({ ...modalState, show: false });
    }
    return (
        <Content>
            <form onSubmit={handleSubmit(handleOnClick)}>
                <Header>
                    <Icon src={Add_File} />
                    <Title>New File</Title>
                    <Close onClick={() => setModalState({ ...modalState, show: false })}>
                        <Icon src={CloseSvg} />
                    </Close>
                </Header>
                <Body>
                    <Pane>
                        <Label htmlFor="fileName">File Name: </Label>
                        <Input
                            {...register("fileName",
                                {
                                    required: true,
                                    pattern: /^[0-9a-zA-Z ... ]+$/,
                                    validate: (value) => !check_if_exists(context.selected, value)
                                })} />
                    </Pane>
                    {errors.fileName?.type === 'required' && <Error text={"File name is required."} />}
                    {errors.fileName?.type === 'pattern' && <Error text={"Not valid. Please choose a different name."} />}
                    {errors.fileName?.type === 'validate' && <Error text={"File Name already exists."} />}

                    <Pane>
                        <Label>Save as</Label>
                        <Select name="Extension" id="extension" {...register("fileExtension")}>
                            <Option value="txt">Plain text</Option>
                            <Option value="cpp">cpp</Option>
                            <Option value="html">HTML file</Option>
                            <Option value="js">javascript</Option>
                        </Select>
                    </Pane>
                </Body>
                <Footer>
                    <CancelButton onClick={() => setModalState({ ...modalState, show: false })}><p>Cancel</p></CancelButton>
                    <Button type="submit"><p>Create</p></Button>
                </Footer>
            </form>
        </Content >
    )
}

export const Error = (props) => {
    return (
        <ErrorText>{props.text}</ErrorText>
    )
}

export default NewFile;