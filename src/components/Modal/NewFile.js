import React, { useContext } from 'react';
import ReactContext from '../../context';
import { root } from '../../apis';
import { Close as CloseSvg } from '../../assests';
import { Body, Button, Content, Footer, Header, Input, Label, Pane, Select, Title, Close, Option, ErrorText } from './ModalStyles';
import { useForm } from 'react-hook-form';
import { check_if_exists } from '../../utils.js';


const NewFile = ({ modalState, setModalState }) => {
    const context = useContext(ReactContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function addNewNode(data) {
        context.selected.insert(data);
        context.setFolders([root]);
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
                    <Title>New File</Title>
                    <Close src={CloseSvg} onClick={() => setModalState({ ...modalState, show: false })} />
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
                    <Button type="submit">Create</Button>
                </Footer>
            </form>
        </Content>
    )
}

export const Error = (props) => {
    return (
        <ErrorText>{props.text}</ErrorText>
    )
}

export default NewFile;