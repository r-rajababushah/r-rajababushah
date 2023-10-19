import React from 'react';
import { Link } from 'react-router-dom';
import "./Portfolio.scss";


function Portfolio() {
    let imgURL = "/static/todos.png";
    return (

        <div className='portfolio'>
            <div className="projects-cards">
                <div className="project-card">
                    <div className="project-img" style={{ backgroundImage: "url('/static/marketing_page.png')" }}>
                    </div>
                    <div className="project-description">
                        &lt; <Link to={'https://marketing-website-landing-page.vercel.app/'} target='_blank'>Marketing Landing Page</Link> /&gt;
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-img" style={{ backgroundImage: "url('/static/signupin.png')" }}>
                    </div>
                    <div className="project-description">
                        &lt; <Link to={'https://loginform-inreactjs.vercel.app/'} target='_blank'>SignUp and SignIn</Link> /&gt;
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-img" style={{ backgroundImage: "url('/static/todo-app.png')" }}>
                    </div>
                    <div className="project-description">
                        &lt; <Link to={'https://r-react-todo.vercel.app/'} target='_blank'>Todo App</Link> /&gt;
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-img" style={{ backgroundImage: "url('/static/quote-app.png')" }}>
                    </div>
                    <div className="project-description">
                        &lt; <Link to={'https://r-rajababushah.github.io/Random-Quote-Machine/'} target='_blank'>Random Quote Machine</Link> /&gt;
                    </div>
                </div>
            </div>
            <div className="project-more-button">
                <button type="button"><Link to={"https://github.com/r-rajababushah"}>View More on GitHub</Link></button>
            </div>
        </div>
    )
}

export default Portfolio;