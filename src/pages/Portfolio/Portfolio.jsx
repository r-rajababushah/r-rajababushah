import React from 'react';
import { Link } from 'react-router-dom';
import "./Portfolio.scss";


function Portfolio() {
    let imgURL = "/static/todos.png";
    return (

        <div className='portfolio'>
            <div className="projects-cards">
                <div className="project-card">
                    <div className="project-img">
                        <img src={imgURL} alt="" />
                    </div>
                    <div className="project-description">ImgDESC</div>
                </div>
                <div className="project-card">
                    <div className="project-img">
                        <img src={imgURL} alt="" />
                    </div>
                    <div className="project-description">ImgDESC</div>
                </div>
                <div className="project-card">
                    <div className="project-img">
                        <img src={imgURL} alt="" />
                    </div>
                    <div className="project-description">ImgDESC</div>
                </div>
                <div className="project-card">
                    <div className="project-img">
                        <img src={imgURL} alt="" />
                    </div>
                    <div className="project-description">ImgDESC</div>
                </div>
            </div>
            <div className="project-more-button">
                <button type="button"><Link to={"https://github.com/r-rajababushah"}>View More on GitHub</Link></button>
            </div>
        </div>
    )
}

export default Portfolio;