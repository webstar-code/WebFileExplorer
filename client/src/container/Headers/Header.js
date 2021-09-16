import React from 'react';
import { Menu } from '../../components'
import { Container, Title } from './HeaderStyles'

export const Header = () => {
    return (
        <Container>
            <Title>File System</Title>
            <Menu />
        </Container>
    )
}