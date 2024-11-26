
import React, {createContext} from 'react';
import  Theme  from './theme';
const themeContext = createContext(Theme.light);

export default themeContext;