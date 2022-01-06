// ----- IMPORT -----
import React, { createContext, useState } from "react";
// ------------------

export const AppContext = createContext();

export const AppProvider = (props) => {

    const [data, setData] = useState({
        page: 1,
        selected: undefined,
        search: '',
        loading: false,
    });

    return(
        <AppContext.Provider value={[data, setData]}>
            {props.children}
        </AppContext.Provider>
    );
};