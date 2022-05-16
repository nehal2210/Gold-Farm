import React from 'react';
import '../../src/styles/header-style/header-style.css'
import { Link } from "react-router-dom";
import logo from '../../src/images/gold-farm-icon-rem.png'


const Header = () => {
    return (
        <header className="brand-navigation">
            <div className="content">
                <img className="logo-nav" src={logo} />
                <nav>
                    <ul className="navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pool">Pool</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <button className="button-dark">Keine Ahnung</button>
            </div>
        </header>
    )
}

export default Header;