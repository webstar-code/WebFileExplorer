import styled from 'styled-components/macro';

export const Container = styled.div`
display: block;
`;

export const Icon = styled.img`
    width: 14px;
    height: 14px;
    cursor: pointer;
`;

export const Text = styled.h3`
    margin-left: 5px;
    cursor: default;
`;

export const Child = styled.div`
    margin-left: 20px;
    margin-top: 5px;
`;

export const Pane = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.bgcolor};
    `;