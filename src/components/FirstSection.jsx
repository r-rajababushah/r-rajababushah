import React from 'react'
import "./FirstSection.scss";


const FirstSection = () => {
    return (
        <nav className='first-section'>
            <div className="profile-summary">
                <h2>𝕽𝖆𝖏𝖆𝖇𝖆𝖇𝖚 𝕾𝖍𝖆𝖍</h2>
                <h4>ℜ𝔢𝔞𝔠𝔱 𝔣𝔯𝔬𝔫𝔱𝔢𝔫𝔡 𝔡𝔢𝔳𝔢𝔩𝔬𝔭𝔢𝔯</h4>
            </div>
            <div className="social-links">
                <ul>
                    <li><a href="https://twitter.com/Rajababushah_" target='_blank'>Twitter</a></li>
                    <li><a href="">Google</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Github</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default FirstSection