import React from 'react';
import "./Header.scss";

function Header() {
    return (
        <nav className="nav">
            <label htmlFor="title" className='title'><a href=''>Portfolio</a></label>
            <ul>
                <li><a href="" title="At this time this worn't work">HOME</a></li>
                <li><a href="" title="At this time this worn't work">SKILLS</a></li>
                <li><a href="" title="At this time this worn't work">EDUCATION</a></li>
                <li><a href="" title="At this time this worn't work">PORTFOLIO</a></li>
                <li><a href="" title="At this time this worn't work">CONTACT</a></li>
            </ul>
        </nav>
    )
}
export default Header;  