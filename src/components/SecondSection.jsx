import React from 'react'
import "./SecondSection.scss";

let imgURL = "src/components/assets/profile.jpg";

if (navigator.onLine) {
    console.log("Internet avilavle ? ", navigator.onLine)
    imgURL = "https://i.ibb.co/RCP6CL3/Me-Profile-Pic.jpg"
    console.clear();
}

const SecondSection = () => {
    return (
        <div className='SecondSection'>
            <ProfileCard />
            <SkillsCard />
            <EducationCard />
            <PortfolioCard />
        </div>
    )
}

export default SecondSection;


const ProfileCard = () => {
    return (
        <>
            <div className="mainProfileContainer">
                <div className="profilePhoto">
                    <img src={imgURL} width="400px" height="400px" alt="PROFILE" />
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
                            <tbody>
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
                            </tbody>

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

const EducationCard = () => {
    return (
        <div className='EducationCard'>
            <div className="headerMains">
                <h2>Education</h2>
            </div>
            <div className="cardSpaces">
                <div className="timeline">
                    <div className="container left-container">
                        <img src="src/assets/favicon.png" alt="" />
                        <div className="text-box">
                            <h4>Bachelors of Computer Application</h4>
                            <p>Indira Ghandhi National Open University</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                    <div className="container right-container">
                        <img src="src/assets/favicon.png" alt="" />
                        <div className="text-box">
                            <h4>10+2 PCM</h4>
                            <p>Glacier International Secondary</p>
                            <span className='right-container-arrow'></span>

                        </div>
                    </div>
                    <div className="container left-container">
                        <img src="src/assets/favicon.png" alt="" />
                        <div className="text-box">
                            <h4>School level</h4>
                            <p>Shanti Nikunja Madhyamic Vidhaylaya</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PortfolioCard = () => {
    return (
        <div className="PortfolioCard">
            <div className="headerMains">
                <h2>Portfolio</h2>
            </div>
            <div className="cardSpaces">
                <nav>
                    <h2>Projects</h2>
                </nav>
                <div className="projects">
                    <div className="box">A</div>
                    <div className="box">B</div>
                    <div className="box">C</div>
                    <div className="box">D</div>
                    <div className="box">E</div>
                    <div className="box">F</div>
                    <div className="box">G</div>
                    <div className="box">H</div>
                    <div className="box">I</div>
                </div>
            </div>
        </div>
    )
}