import React from 'react'
import "./SecondSection.scss";

const SecondSection = () => {
    return (
        <div className='SecondSection'>
            <ProfileCard />
            <SkillsCard />
        </div>
    )
}

export default SecondSection;


const ProfileCard = () => {
    return (
        <>
            <div className="mainProfileContainer">
                <div className="profilePhoto">
                    <img src={"https://github.com/r-rajababushah/r-rajababushah.github.io/blob/master/src/assets/Me_ProfilePic.jpg"} width="400px" alt="" />
                </div>
                <div className="profileDetail">
                    <div className="firstSectionProfile">
                        <h3>Hello & Welcome</h3>
                    </div>
                    <div className="secondSectionProfile">
                        <h3>I'M RAJABABU SHAH </h3> <br />
                        <h5>Developing Web Application</h5>

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
                        THE ENDING, TO ALL STORIES IS WRITTEN BY DESTINY
                    </div>
                </div>
            </div>
        </>
    )
}

const SkillsCard = () => {
    return (
        <>
            <div className="SkillsCard">
                <div className="headerMains">
                    <h2>Skills</h2>
                </div>
                <div className="cardSpaces">
                    <div className="aboutMe">
                        <p>Hello! I'm Rajababu Shah. Junior Web Developer specializing in front end developmnet. Experienced with all libraries of frontend developemnt cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, Node.js , javascript and python.<br /><br />
                            Hands on experience on Web Development. Quick learner and ability to work with minimum guidance.</p>
                    </div>
                    <div className="skillsMe">
                        <div className="skillS">
                            <p>HTML</p>
                            <p>95%</p>
                        </div>
                        <div className="bars">
                            <progress className="bar" value="95" max="100"> 95% </progress>
                        </div>
                        <div className="skillS">
                            <p>CSS</p>
                            <p>80%</p>
                        </div>
                        <div className="bars">
                            <progress className="bar" value="80" max="100"> 80% </progress>
                        </div>
                        <div className="skillS">
                            <p>JavaScript</p>
                            <p>60%</p>
                        </div>
                        <div className="bars">
                            <progress className="bar" value="60" max="100"> 60% </progress>
                        </div>
                        <div className="skillS">
                            <p>ReactJS</p>
                            <p>50%</p>
                        </div>
                        <div className="bars">
                            <progress className="bar" value="50" max="100"> 50% </progress>
                        </div>
                        <div className="skillS">
                            <p>Bootstrap</p>
                            <p>90%</p>
                        </div>
                        <div className="bars">
                            <progress className="bar" value="90" max="100"> 90% </progress>
                        </div>
                        <div className="skillS">
                            <p>NodeJS</p>
                            <p>10%</p>
                        </div>
                        <div className="bars">
                            <progress className="bar" value="10" max="100"> 10% </progress>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
