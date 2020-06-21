import React, { createContext, useReducer } from 'react';
import { DivsReducer, SubDivsReducer } from '../reducers/Reducers';

export const context = createContext();

const AppContext = (props) => {
    const [divs, divs_dispatch] = useReducer(DivsReducer, []);

    const [subDivs, subDivs_dispatch] = useReducer(SubDivsReducer, []);

    return (
        <context.Provider value={{ divs, divs_dispatch, subDivs, subDivs_dispatch }}>
            {props.children}
        </context.Provider>
    );
};

export default AppContext;