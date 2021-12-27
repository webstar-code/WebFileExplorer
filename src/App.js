import React, { useContext, useEffect, useState } from 'react';
import { Header, Folders } from './container'
import styled from 'styled-components';
import ReactContext from './context';
import { device } from './Breakpoints';
// import { Construct, find_from_data, Node } from './apis';
import { rootNode } from './apis'

function App() {
  const [root, setRoot] = useState(rootNode);
  const [folders, setFolders] = useState([root]);
  const [selected, setSelected] = useState(root);

  // useEffect(() => {
  //   find_from_data(1).then((data) => {
  //     console.log(data);
  //     let r = new Node(data[0]);
  //     console.log(r);
  //     let x = Construct(r);
  //     console.log(x);
  //     setRoot(x);
  //   })
  // }, []);

  useEffect(() => {
      setFolders([root]);
  }, [root]);
 
  return (
    <Container>
      <ReactContext.Provider value={{ root, setRoot, folders, setFolders, selected, setSelected }}>
        <Header />
        {root ?
          <Folders />
          : <h1>Loading...</h1>
        }
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
