import React, { useContext } from 'react';
import { Container, Input, Icon, IconContainer} from './MenuStyles';
import {Add_File} from '../../assests/index'
import { Search } from '../../components';
import ReactContext from '../../context';

export const Menu = (props) => {

    return(
        <Container>
            <Input type="text" placeholder="/root" width='50%' disabled={true} ></Input>
            <Search setFolders={props.setFolders} />
            <IconContainer>
                <Icon src={Add_File}></Icon>
                <Icon src={Add_File}></Icon>
                <Icon src={Add_File}></Icon>
                <Icon src={Add_File}></Icon>

            </IconContainer>
        </Container>
    )
}
