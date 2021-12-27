import React, {useState, useCallback, useEffect, useContext} from 'react';
import { Cut } from '../../utils.js';
import { Container, List, ListItem } from './ContextmenuStyles';
import ReactContext from '../../context';

const ContextMenu = ({setModalState}) => {
    const context = useContext(ReactContext)
    const [show, setShow] = useState(false);
    const [pos, setPos] = useState({x: 0, y: 0});
    const [pasteItem, setPasteItem] = useState();
    let root = context.root;
    const handleClick = useCallback(() => {
        setShow(false);
    }, []);

    const handleContextMenu = useCallback((e) => {   
        e.preventDefault();
        setShow(!show);
        setPos(
            {x: e.pageX,
             y: e.pageY}
        )
    }, []);


    const handleCut = () => {
      let cutNode = Cut(context.selected);
      setPasteItem(cutNode);
      context.setFolders([root]);
    }

    const handleCopy = () => {
      setPasteItem(context.selected);
    }
    
    const handlePaste = () => {
      if(context.selected.type === 'folder') {
        context.selected.insert(pasteItem);
        context.setFolders([root]);

      }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('contextmenu', handleContextMenu);
        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('contextmenu', handleContextMenu);
        }
    })

    return(
        <Container>
        {show ? (
          <List
            style={{
              top: pos.y,
              left: pos.x
            }}
          >
            <ListItem>Open</ListItem>
            <ListItem onClick={() => setModalState({show: true, type: 'file'})}>New File</ListItem>
            <ListItem onClick={() => setModalState({show: true, type: 'folder'})}>New Folder</ListItem>

            <ListItem onClick={() => handleCut()}>Cut</ListItem>
            <ListItem onClick={() => handleCopy()}>Copy</ListItem>
            <ListItem onClick={() => handlePaste()} style={{opacity: pasteItem ? 1 : 0.5}}>Paste</ListItem>

            <ListItem onClick={() => setModalState({show: true, type: 'rename'})}>Rename</ListItem>
            <ListItem onClick={() => setModalState({show: true, type: 'delete'})}>Delete</ListItem>
            <ListItem>Properties</ListItem>
          </List>
        ) : (
          <> </>
        )}
      </Container>
    )
}


export default ContextMenu;