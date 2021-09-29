import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle ={
        fontWeight: "bold",
        color: "red"

    }

    return (
        <div>
            <nav>
            <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
            <NavLink to="/friends" activeStyle={activeStyle}>Friends</NavLink>
            <NavLink to="/calture" activeStyle={activeStyle}>OurCalture</NavLink>
            </nav>
        </div>
    );
};

export default Header;