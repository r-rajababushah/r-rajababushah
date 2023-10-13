import React from 'react'
import "./SecondSection.scss";
import ProfileCard from './ProfileCard';

let imgURL;

if (navigator.onLine) {
    imgURL = "https://i.ibb.co/RCP6CL3/Me-Profile-Pic.jpg"
}else {
    imgURL = "src/components/assets/profile.jpg";
}

const SecondSection = () => {
    return (
        <div className='SecondSection'>
            <ProfileCard />
            <SkillsCard />
            <EducationCard />
            <PortfolioCard />
            <InfoCard />
        </div>
    )
}

export default SecondSection;


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
    let projectImgURL = "src/components/assets/todos.png";
    if (navigator.onLine) {
        projectImgURL = "https://i.ibb.co/S3yc63f/todos.png";
    }
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
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href='https://r-react-todo.vercel.app/' target='_blank'><img src={projectImgURL} alt="Todos" /></a>
                    </div>
                    <div className="box">
                        <a href="https://github.com/r.rajababushah/" target='_blank'>
                            <div className="checkoutMore">
                                <button>
                                    Checkout github for more
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const InfoCard = () => {
    let iconURL = "src/assets/favicon.png";

    if (navigator.onLine) {
        iconURL = "https://i.ibb.co/yXsfNZq/favicon.png";
    }
    return (
        <div className='InfoCard'>
            <div className="headerMains">
                <h2>Contact</h2>
            </div>
            <div className="cardSpaces">
                <div className="infos">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={iconURL} alt="" />
                                </td>
                                <td>
                                    <h3>+917319806300</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={iconURL} alt="" />
                                </td>
                                <td>
                                    <h3>New Delhi, India</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={iconURL} alt="" />
                                </td>
                                <td>
                                    <h3>rajababushah.in@gmail.com</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={iconURL} alt="" />
                                </td>
                                <td>
                                    <h3>https://rajababushah.vercel.com</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="formContact">
                    <form>
                        <label htmlFor="name">
                            Name <br />
                            <input type="text" name="name" id="name" required /> <br />
                        </label>
                        <label htmlFor="email">
                            Email <br />
                            <input type="email" id='email' required /> <br />
                        </label>
                        <label htmlFor="message">
                            Message <br />
                            <textarea name="" id="message" height="30px" required></textarea> <br />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div >
    )
}