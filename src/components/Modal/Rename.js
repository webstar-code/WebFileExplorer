import React, { useContext } from 'react';
import { Body, Button, Content, Footer, Header, Input, Label, Pane, Close, Title } from './ModalStyles';
import { useForm } from 'react-hook-form';
import { Close as CloseSvg } from '../../assests';
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
                    <Title>Rename file</Title>
                    <Close src={CloseSvg} onClick={() => setModalState({ ...modalState, show: false })} />
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
                    <Button onClick={() => setModalState({ ...modalState, show: false })}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </Footer>
            </form>
        </Content>
    )
}


export default Rename;