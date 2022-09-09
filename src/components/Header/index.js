import React from "react";
import './styles.css';

const Header = () => {
    return (
        <div bp="grid" className="header">
            <div bp="6">
                <h3 className="programmerCard">PROGRAMMER CARD</h3>
            </div>
            <div bp="6">
                <h3 className="nome"> JOÃO VITOR</h3>
            </div>
        </div>
    );
}

export default Header;