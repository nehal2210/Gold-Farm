import React from 'react';
import '../../src/styles/header-style/header-style.css'
import { Link } from "react-router-dom";
import logo from '../../src/images/gold-farm-icon-rem.png'
import { propTypes } from 'react-bootstrap/esm/Image';





const Header = (props) => {








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
                <button className="button-dark">{props.network}</button>
            </div>
        </header>
    )
}

export default Header;