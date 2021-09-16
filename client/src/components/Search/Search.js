import React, { useContext } from 'react';
import styled from 'styled-components';
import { root } from '../../apis'
import { device } from '../../Breakpoints';
import ReactContext from '../../context';


export const Input = styled.input`
    grid-area: search;
    margin: 10px 0px;
    padding: 10px;
    width: ${props => props.width};
    margin-right: 10px;
    background: #C4C4C4;
    border-radius: 2px;
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

export const Search = () => {
    const context = useContext(ReactContext);
    let items = [];

    function SearchNode(root, value) {
        let name = root.name;
        let exp = new RegExp("\\b" + value);
        if (name.search(exp) >= 0) items.push(root);

        if (root.nextSibling) {
            SearchNode(root.nextSibling, value);
        }
        if (root.firstChild) {
            SearchNode(root.firstChild, value);
        }
        return;
    }

    const handleOnChange = (value) => {
        // find nodes with value
        if (value === "") {
            items = [root];
        } else {
            SearchNode(root, value);
        }
        context.setFolders(items);
    }
    return (
        <Input type="text" placeholder="Search" width='25%' onChange={(e) => handleOnChange(e.target.value)}></Input>
    )
}