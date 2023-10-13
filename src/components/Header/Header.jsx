import React from 'react';
import "./Header.scss";

function Header() {
    return (
        <nav className="nav">
            <label htmlFor="title" className='title'><a href=''>Portfolio</a></label>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#education">EDUCATION</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    )
}
export default Header;  