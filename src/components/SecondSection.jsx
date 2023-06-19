import React from 'react'
import "./SecondSection.scss";

const SecondSection = () => {
    return (
        <div className='SecondSection'>
            <ProfileCard />
        </div>
    )
}

export default SecondSection;


const ProfileCard = () => {
    return (
        <>
            <div className="mainProfileContainer">
                <div className="profilePhoto">
                    <img src="src/assets/Me_ProfilePic.jpg" width="400px" alt="" />
                </div>
                <div className="profileDetail">
                    <div className="firstSectionProfile">
                        <div className="oneFirstSection">
                            Hello & Welcome
                        </div>
                        <div className="twoFirstSection">

                        </div>
                    </div>
                    <div className="secondSectionProfile">
                        I'M RAJABABU SHAH  <br />
                        Developing Web Application

                        <hr />
                        <table>
                            <tr>
                                <td>Birth Date</td>
                                <td>13th May</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>New Delhi, India</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>rajababushah.in@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>+917319806300</td>
                            </tr>
                        </table>
                    </div>
                    <div className="lastSectionProfile">
                        Quote of the world
                    </div>
                </div>
            </div>
        </>
    )
}