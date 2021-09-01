import React from 'react';
import styled from 'styled-components';
import { root } from '../../apis'


export const Input = styled.input`
    margin: 10px 0px;
    padding: 10px;
    border-radius: 2px;
    width: ${props => props.width};
    margin-right: 10px;
`;

export const Search = (props) => {
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
        if (value == "") {
            items = [root];
        } else {
            SearchNode(root, value);
        }
        props.setFolders(items);
    }
    return (
        <Input type="text" placeholder="Search" width='25%' onChange={(e) => handleOnChange(e.target.value)}></Input>
    )
}