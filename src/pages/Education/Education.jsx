import React from 'react';
import "./Education.scss";
import { Helmet } from 'react-helmet';

function Education() {
    let imgURL = "static/timeline-logo.png";
    
    return (
        <div className='education'>
            <Helmet>
                <title>Rajababu Shah - Education</title>
            </Helmet>
            <div className="timeline">
                <div className="container right-container">
                    <img src={imgURL} alt="" />
                    <div className="text-box">
                        <h4>Bachelors of Computer Application</h4>
                        <p>Indira Ghandhi National Open University</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img src={imgURL} alt="" />
                    <div className="text-box">
                        <h4>10+2 PCM</h4>
                        <p>Glacier International Secondary School</p>
                        <span className='right-container-arrow'></span>

                    </div>
                </div>
                <div className="container right-container">
                    <img src={imgURL} alt="" />
                    <div className="text-box">
                        <h4>School level</h4>
                        <p>Shanti Nikunja Madhyamic Vidhaylaya</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;