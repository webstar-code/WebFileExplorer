import React, { useContext, useState } from 'react';
import { root } from '../../apis';
import { Down_Arrow, Opened_Folder, Right_Arrow, Folder as FolderSvg, File } from '../../assests/index'
import ReactContext from '../../context';
import { Container, Icon, Text, Child, Pane } from './FolderStyles';


function GetChildren(root) {
    if (root === null) return;
    let items = [];
    let temp = root.firstChild;
    while (temp) {
        items.push(temp);
        temp = temp.nextSibling;
    }
    return items;
}

export const Folder = ({ folder }) => {
    const context = useContext(ReactContext);
    const [open, setOpen] = useState(false);
    let children = GetChildren(folder);

    const handleOnClick = () => {
        setOpen(!open);
    }
    const changeSelected = () => {
        context.setSelected(folder);
    }

    return (
        <Container>

            {folder.type == 'file' ?
                <Pane bgcolor={context.selected.name === folder.name ? '#03a9f44f' : 'none'}>
                    <Icon src={File} />
                    <Text onClick={() => changeSelected()} onDoubleClick={() => handleOnClick()}>{folder.name}</Text>
                </Pane>
                :
                <>
                    <Pane onClick={() => handleOnClick()} bgcolor={context.selected.name === folder.name ? '#03a9f44f' : 'none'}>
                        {open ?
                            <Icon src={Opened_Folder} onClick={() => handleOnClick()} />
                            :
                            <Icon src={FolderSvg} onClick={() => handleOnClick()} />
                        }
                        <Text onClick={() => changeSelected()} onDoubleClick={() => handleOnClick()}>{folder.name}</Text>
                    </Pane>
                    {open ?
                        <Child>
                            {children.map((el) => {
                                return <Folder folder={el} key={el.name} />
                            })}
                        </Child>
                        : null}
                </>
            }
        </Container>
    )
}

