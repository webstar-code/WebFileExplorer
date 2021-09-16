import React, { useContext } from 'react';
import { Body, Button, Content, Footer, Header, Input, Label, Pane, Close, Title, Icon, CancelButton } from './ModalStyles';
import { useForm } from 'react-hook-form';
import { Close as CloseSvg, Edit_File } from '../../assests';
import { check_if_exists } from '../../utils.js';
import ReactContext from '../../context';
import { root } from '../../apis';
import { Error } from './NewFile';

const Rename = ({ modalState, setModalState }) => {
    const context = useContext(ReactContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        context.selected.rename(data.fileName);
        context.setFolders([root]);
        setModalState({ ...modalState, show: false });
    }


    return (
        <Content>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Header>
                    <Icon src={Edit_File} />
                    <Title>Rename file</Title>
                    <Close onClick={() => setModalState({ ...modalState, show: false })}>
                        <Icon src={CloseSvg} />
                    </Close>
                </Header>
                <Body>
                    <Pane>
                        <Label>Rename</Label>
                        <Input
                            {...register("fileName",
                                {
                                    required: true,
                                    pattern: /^[0-9a-zA-Z ... ]+$/,
                                    validate: (value) => !check_if_exists(context.selected, value)
                                }
                            )}
                        />
                    </Pane>
                    {errors.fileName?.type === 'required' && <Error text={"File name is required."} />}
                    {errors.fileName?.type === 'pattern' && <Error text={"Not valid. Please choose a different name."} />}
                    {errors.fileName?.type === 'validate' && <Error text={"File Name already exists."} />}

                </Body>

                <Footer>
                    <CancelButton onClick={() => setModalState({ ...modalState, show: false })}><p>Cancel</p></CancelButton>
                    <Button type="submit"><p>Rename</p></Button>

                </Footer>
            </form>
        </Content>
    )
}


export default Rename;