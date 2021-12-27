import {createContext} from 'react';
import { rootNode } from './apis';

const ReactContext = createContext({
    root: {},
    setRoot: () => {},
    folders: [],
    setFolders: () => {},
    selected: rootNode,
    setSelected: () => {}
});

export default ReactContext;
