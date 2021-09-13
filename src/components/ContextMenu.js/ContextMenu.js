import React, {useState, useCallback, useEffect} from 'react';
import { Container, List, ListItem } from './ContextmenuStyles';


const ContextMenu = () => {
    const [show, setShow] = useState(false);
    const [pos, setPos] = useState({x: 0, y: 0});

    const handleClick = useCallback(() => {
        setShow(true);
    }, [show]);

    const handleContextMenu = useCallback((e) => {
        
        e.preventDefault();

        setPos(
            {x: e.pageX,
             y: e.pageY}
        )
    }, [setPos, setShow]);



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
            <ListItem>Share to..</ListItem>
            <ListItem>Cut</ListItem>
            <ListItem>Copy</ListItem>
            <ListItem>Paste</ListItem>
            <ListItem>Refresh</ListItem>
            <ListItem>Exit</ListItem>
          </List>
        ) : (
          <> </>
        )}
      </Container>
    )
}


export default ContextMenu;