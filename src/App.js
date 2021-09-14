import React, { useState } from 'react';
import { Header, Menu, Folders } from './container'
import styled from 'styled-components';
import { root } from './apis'
import ReactContext from './context';
import ContextMenu from './components/ContextMenu.js/ContextMenu';

function App() {
  const [folders, setFolders] = useState([root]);
  const [selected, setSelected] = useState(root);
  return (
    <Container>
      <Header />
      <ReactContext.Provider value={{folders, setFolders, selected, setSelected}}>
        <Menu />
        <Folders />
      </ReactContext.Provider>
    </Container>
  );
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px;
  margin: auto;
`;

export default App;
