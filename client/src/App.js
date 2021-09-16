import React, { useState } from 'react';
import { Header, Folders } from './container'
import styled from 'styled-components';
import { root } from './apis'
import ReactContext from './context';
import { device } from './Breakpoints';


function App() {
  const [folders, setFolders] = useState([root]);
  const [selected, setSelected] = useState(root);
  return (
    <Container>
      <ReactContext.Provider value={{folders, setFolders, selected, setSelected}}>
        <Header />
        <Folders />
      </ReactContext.Provider>
    </Container>
  );
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  margin: auto;
  
  @media ${device.tablet} {
    width: 100%;
    padding: 0px;
  }
  @media ${device.mobileL} {
    width: 100%;
    padding: 0px;
  }
`;

export default App;
