import React from 'react';
import "./Home.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    let imgURL = "/static/itsme.jpg";

    return (
        <div className='Home'>
                <Helmet>
                    <title>Rajababu Shah - Home</title>
                </Helmet>
                <div className='profile-intro'>
                    <h2>Rajababu Shah</h2>
                    <h5>Frontend Web Developer</h5>
                </div>

                <div className="profile-card">
                    <img src={imgURL} id='profile-img' alt="PROFILE" />
                </div>

                <div className="profile-details">
                    <h4>Hello & Welcome</h4>
                    <h2>I'm Rajababu Shah</h2>
                    <h5>Developing Websites</h5>
                    <hr style={{ borderColor: "black" }} />
                    <table>
                        <tbody>
                            <tr>
                                <td className='index'>
                                    <span className='icon'>
                                        <i className="fa-solid fa-calendar-day"></i>
                                    </span>
                                    Birth Date
                                </td>
                                <td className='value'>13th May</td>
                            </tr>
                            <tr>
                                <td className='index'>
                                    <span className="icon">
                                        <i className="fa-solid fa-location-arrow"></i>
                                    </span>
                                    Address
                                </td>
                                <td className='value'>Bhubaneswar, India</td>
                            </tr>
                            <tr>
                                <td className='index'>
                                    <span className="icon">
                                        <i className="fa-solid fa-at"></i>
                                    </span>
                                    Email
                                </td>
                                <td className='value'>rajababushah.in@gmail.com</td>
                            </tr>
                            <tr>
                                <td className='index'>
                                    <span className="icon">
                                        <i className="fa-solid fa-phone-volume"></i>
                                    </span>
                                    Phone
                                </td>
                                <td className='value'>(+91)7319806300</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr style={{ borderColor: "black", marginBottom: "10px" }} />
                    <q className='quote'>THE ENDING, TO ALL STORIES IS WRITTEN BY DESTINY</q>
                </div>
        </div>
    )
}

export default Home;