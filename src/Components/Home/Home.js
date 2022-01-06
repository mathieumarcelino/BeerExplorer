// ----- IMPORT -----
import React from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import Search from '../Search/Search';
import Nav from '../Nav/Nav';
import {AppProvider} from "../../Context/AppContext"
// ------------------


const Home = () => {
    return(
        <AppProvider>
            <Header/>
            <Search/>
            <List/>
            <Nav/>
        </AppProvider>
    )
}

export default Home;