import React from 'react';
import "./Skills.scss";

function Skills() {
    return (
        <div className='skills'>
            <p className='skills-intro' >Hello! I'm <b>Rajababu Shah</b> Junior Web Developer specializing in front end developmnet with <span style={{color: "red"}}>React.js</span>. Experienced with all libraries of frontend developemnt cycle for <span style={{color: "red"}}>dynamic web projects.</span> Well-versed in numerous programming languages including HTML5, Node.js , javascript and python. <br /><br />Hands on experience on Web Development. Quick learner and ability to work with minimum guidance.
            </p>

            <hr />

            <div className="skills-bars">
                <div className="skill">
                    <p>HTML</p>
                    <p>95%</p>
                </div>
                <div className="bar">
                    <progress className="bar" value="95" max="100"> 95% </progress>
                </div>
                <div className="skill">
                    <p>CSS</p>
                    <p>80%</p>
                </div>
                <div className="bar">
                    <progress className="bar" value="80" max="100"> 80% </progress>
                </div>
                <div className="skill">
                    <p>JavaScript</p>
                    <p>60%</p>
                </div>
                <div className="bar">
                    <progress className="bar" value="60" max="100"> 60% </progress>
                </div>
                <div className="skill">
                    <p>ReactJS</p>
                    <p>75%</p>
                </div>
                <div className="bar">
                    <progress className="bar" value="75" max="100"> 50% </progress>
                </div>
                <div className="skill">
                    <p>Bootstrap</p>
                    <p>90%</p>
                </div>
                <div className="bar">
                    <progress className="bar" value="90" max="100"> 90% </progress>
                </div>
                <div className="skill">
                    <p>NodeJS</p>
                    <p>50%</p>
                </div>
                <div className="bar">
                    <progress className="bar" value="50" max="100"> 50% </progress>
                </div>
                <div className="skill">
                    <p>MongoDB</p>
                    <p>30%</p>
                </div>
                <div className="bar">
                    <progress className='bar' value={30} max={100}> 30%</progress>
                </div>
                <div className="skill">
                    <p>NextJS</p>
                    <p>35%</p>
                </div>
                <div className="bar">
                    <progress className='bar' value={35} max={100}> 35%</progress>
                </div>
                <div className="skill">
                    <p>Wordpress</p>
                    <p>40%</p>
                </div>
                <div className="bar">
                    <progress className='bar' value={40} max={100}> 40%</progress>
                </div>
            </div>
        </div>
    )
}

export default Skills