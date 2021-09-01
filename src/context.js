import {createContext} from 'react';
import { root } from './apis';


const ReactContext = createContext({selected: root, setSelected: () => {}});

export default ReactContext;