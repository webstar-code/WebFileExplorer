import React, { useContext } from 'react';
import { Folder } from '../../components';
import ReactContext from '../../context';
import { Container } from './FoldersStyles';


export const Folders = () => {
    const context = useContext(ReactContext);
    return (
        <Container>
            {context.folders ? 
            context.folders.map((elm) => {
                return <Folder folder={elm} key={elm.id} />
            }) :
            <h1>No match found</h1>}
        </Container>
    )
}
