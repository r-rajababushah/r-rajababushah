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
                    <li><Link to="/education">EDUCATION</Link></li>
                    <li><Link to="/portfolio">PORTFOLIO</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
            <hr style={{width: "80%", margin: "0px auto"}} />
            <Outlet />
        </div>
    )
}

export default Header