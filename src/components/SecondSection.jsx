import React from 'react';
import "./SecondSection.scss";

let imgURL;

if (navigator.onLine) {
    imgURL = "https://i.ibb.co/RCP6CL3/Me-Profile-Pic.jpg"
} else {
    imgURL = "src/components/assets/profile.jpg";
}

const SecondSection = () => {
    return (
        <div className='SecondSection'>
            <EducationCard />
            {/*
            <PortfolioCard />
            <InfoCard /> */}
        </div>
    )
}

export default SecondSection;


const EducationCard = () => {
    return (
        <div className='EducationCard'>
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