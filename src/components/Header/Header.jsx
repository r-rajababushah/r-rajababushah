import React from 'react'
import "./Header.scss";
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <div className="header" id='home'>
            <nav className="nav" name="#home">
                <label htmlFor="title" className='title'><a href=''>Portfolio</a></label>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/skills">SKILLS</Link></li>
                    <li><a href="#education">EDUCATION</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            <hr style={{}} />
            <Outlet />
        </div>
    )
}

export default Header