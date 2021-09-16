import styled from 'styled-components';
import { device } from '../../Breakpoints'

export const Container = styled.div`
    display: flex;
    margin-top: auto;

    @media ${device.tablet} {
        display: grid;
        grid-template-areas: 'search icons'
                              'status status';
    }
`;

export const Input = styled.input`
    grid-area: status;
    margin: 10px 0px;
    padding: 10px;
    width: ${props => props.width};
    margin-right: 10px;
    background: #C4C4C4;
    border-radius: 2px;
    border: none;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #000000;

    
    @media ${device.tablet} {
        width: 100%;
    }
`;

export const IconContainer = styled.div`
    grid-area: icons;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 0px;
    width: 25%;
    @media ${device.tablet} {
        width: 100%;
    }

`;

export const Icon = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`;