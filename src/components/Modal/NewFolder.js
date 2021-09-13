import React, { useContext } from 'react';
import ReactContext from '../../context';
import { root } from '../../apis';
import { Close as CloseSvg } from '../../assests';

import { useForm } from 'react-hook-form';
import { Body, Button, Content, Footer, Header, Input, Label, Pane, Select, Title, Close, Option } from './ModalStyles';
import { Error } from './NewFile';

const NewFolder = ({ modalState, setModalState }) => {
    const context = useContext(ReactContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

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

    function handleOnClick(data) {
        let newNodeData = { name: data.folderName, type: modalState.type }
        context.selected.insert(newNodeData);
        context.setFolders([root]);
        setModalState({ ...modalState, show: false });
    }

    return (
        <Content>
            <form onSubmit={handleSubmit(handleOnClick)}>
                <Header>
                    <Title>New Folder</Title>
                    <Close src={CloseSvg} onClick={() => setModalState({ ...modalState, show: false, })} />
                </Header>
                <Body>
                    <Pane>
                        <Label htmlFor="folderName">Folder Name: </Label>
                        <Input
                            {...register("folderName",
                                {
                                    required: true,
                                    pattern: /^[0-9a-zA-Z ... ]+$/,
                                    validate: (value) => !check_if_exists(context.selected, value)
                                })}
                        />
                    </Pane>
                    {errors.folderName?.type === 'required' && <Error text={"Folder name is required."} />}
                    {errors.folderName?.type === 'pattern' && <Error text={"Not valid. Please choose a different name."} />}
                    {errors.folderName?.type === 'validate' && <Error text={"Folder Name already exists."} />}
                </Body>
                <Footer>
                    <Button type="submit">Create</Button>
                </Footer>
            </form>
        </Content>
    )
}

export default NewFolder;