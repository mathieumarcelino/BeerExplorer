// ----- IMPORT -----
import React from 'react';
import './Header.css';
// ------------------


const Header = () => {
    return(
        <header className="header">
            <div className="container-title">
                <h1 className="title"><span className="orange">Beer</span>Explorer</h1>
            </div>
        </header>
    )
}

export default Header;