import React from 'react';
import "./Header.scss"; 

function Header() {

    
    return (
        <>
            <nav className="nav">
                <label htmlFor="title" className='title'><a href=''>Portfolio</a></label>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">SKILLS</a></li>
                    <li><a href="">EDUCATION</a></li>
                    <li><a href="">EXPERIENCE</a></li>
                    <li><a href="">PORTFOLIO</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;