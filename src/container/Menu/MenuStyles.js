import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
`;

export const Input = styled.input`
    margin: 10px 0px;
    padding: 10px;
    border-radius: 2px;
    width: ${props => props.width};
    margin-right: 10px;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    width: 25%;

`;

export const Icon = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`;