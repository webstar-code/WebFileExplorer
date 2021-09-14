import styled from "styled-components/macro";


export const Container = styled.div`
    border: 1px solid black;
    z-index: 999;

`;


export const List = styled.ul`
    font-size: 14px;
    background-color: #fff;
    border-radius: 2px;
    padding: 5px 0 5px 0;
    width: 200px;
    height: auto;
    margin: 0;
    position: absolute;
    list-style: none;
    opacity: 1;
    transition: opacity 0.5s linear;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


export const ListItem = styled.li`
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 300px;
    cursor: default;
    &:hover {
        background: #c0bdbd;
    }
    
`;
