import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar">
            <div className="home">
                <Link to='/'>&#9962;</Link>
                </div>
                <div className="header-options">
                <Link className="options" to='/todo'>Todo</Link>
                <Link className="options" to='/counter'>Counter</Link>
                <Link className="options" to='/weather'>Weather App</Link>
                <Link className="options" to='/api' >Api Data</Link>
                <Link className="options" to='/calculator'>Calculator</Link>
            </div>
        </div>
    )
}
export default Header;