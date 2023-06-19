import React from 'react'
import "./FirstSection.scss";


const FirstSection = () => {
    return (
        <>
            <nav className='firstSection'>
                <div className="firstM">
                    <h2>Rajababu Shah</h2>
                    <h4>Web Developer</h4>
                </div>
                <div className="lastM">
                    <ul>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Google</a></li>
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">Github</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default FirstSection