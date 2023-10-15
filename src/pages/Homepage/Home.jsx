import React from 'react';
import "./Home.scss"

const Home = () => {
    const imgURL = (navigator.onLine) ? "https://i.ibb.co/RCP6CL3/Me-Profile-Pic.jpg" : "src/components/assets/profile.jpg";

    return (
        <div className='Home' id='Home'>
            <nav className='profile-intro'>
                <h2>Rajababu Shah</h2>
                <h5>Frontend Web Developer</h5>
            </nav>
            <div className="profile-card">
                <img src={imgURL}  id='profile-img' alt="PROFILE" />
            </div>
            <div className="profile-details">
                <h4>Hello & Welcome</h4>
                <h2>I'm Rajababu Shah</h2>
                <h5>Developing Web Application</h5>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td className='index'>Birth Date</td>
                            <td className='value'>13th May</td>
                        </tr>
                        <tr>
                            <td className='index'>Address</td>
                            <td className='value'>New Delhi, India</td>
                        </tr>
                        <tr>
                            <td className='index'>Email</td>
                            <td className='value'>rajababushah.in@gmail.com</td>
                        </tr>
                        <tr>
                            <td className='index'>Phone</td>
                            <td className='value'>+917319806300</td>
                        </tr>
                    </tbody>
                </table>
                <hr style={{marginBottom: "10px"}} />
                <q className='quote'>THE ENDING, TO ALL STORIES IS WRITTEN BY DESTINY</q>
            </div>
        </div>
    )
}

export default Home;