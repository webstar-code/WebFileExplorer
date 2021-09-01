import React from 'react';
import { Folder } from '../../components';
import { root } from '../../apis'
import { Container } from './FoldersStyles';


export const Folders = (props) => {
    let folders = props.folders;
    return (
        <Container>
            {folders ? 
            folders.map((elm) => {
                return <Folder root={elm} key={elm.id} />
            }) :
            <h1>No match found</h1>}
        </Container>
    )
}
