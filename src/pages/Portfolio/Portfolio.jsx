import React from 'react';
import { Link } from 'react-router-dom';
import "./Portfolio.scss";


function Portfolio() {

    return (
        <div className='portfolio'>
            <div className="projects-cards">
                <div className="project-card">
                    <div className="project-img">
                        <img src="src/components/assets/todos.png" alt="" />
                    </div>
                    <div className="project-description">ImgDESC</div>
                </div>
                <div className="project-card">
                    <div className="project-img">
                        <img src="src/components/assets/todos.png" alt="" />
                    </div>
                    <div className="project-description">ImgDESC</div>
                </div>
                <div className="project-card">
                    <div className="project-img">
                        <img src="src/components/assets/todos.png" alt="" />
                    </div>
                    <div className="project-description">ImgDESC</div>
                </div>
                <div className="project-card">
                    <div className="project-img">
                        <img src="src/components/assets/todos.png" alt="" />
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