import {createContext} from 'react';
import { root } from './apis';


const ReactContext = createContext({
    folders: [],
    setFolders: () => {},
    selected: root,
    setSelected: () => {}


});

export default ReactContext;

// {
//     "name": "applications",
//     "id": 1,
//     "children": [
//         {"id": 3},
//         {"id": 4}
//     ]
// },
// {
//     "name": "games",
//     "id": 2,
//     "children": [
//         {"id": 5}
//     ]
// },
// {
//     "name": "blender",
//     "id": 3,
//     "children": []
// },
// {
//     "name": "google",
//     "id": 4,
//     "children": []
// },
// {
//     "name": "counter-strike",
//     "id": 5,
//     "children": []
// }