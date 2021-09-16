import React from 'react';
import Delete from './Delete.js';
import {Container} from './ModalStyles.js'
import NewFile from './NewFile.js';
import NewFolder from './NewFolder.js'
import Rename from './Rename.js';


export const Modal = ({modalState, setModalState}) => {

    if (!modalState.show) {
        return null;
    }

    return (
        <Container>
            {modalState.type == 'file' ? 
            <NewFile modalState={modalState} setModalState={setModalState} />
            : modalState.type == 'folder' ?
            <NewFolder modalState={modalState} setModalState={setModalState} /> 
            : modalState.type == 'delete' ? 
            <Delete modalState={modalState} setModalState={setModalState} />
            : modalState.type == 'rename' ? 
            <Rename modalState={modalState} setModalState={setModalState} />
            : null}
        
        </Container>
    )
}