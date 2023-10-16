import React from 'react';
import "./Contact.scss";

function Contact() {
    return (
        <div className='contact'>
            <div className="contact-info">
                <div className="contact-data-row">
                    <div className="icon-img">
                        <img src="src/assets/favicon.png" alt="png" />
                    </div>
                    <div className="contact-data">
                        <h3>(+91) 7319806300</h3>
                    </div>
                </div>
                <div className="contact-data-row">
                    <div className="icon-img">
                        <img src="src/assets/favicon.png" alt="png" />
                    </div>
                    <div className="contact-data">
                        <h3>New Delhi, India</h3>
                    </div>
                </div>
                <div className="contact-data-row">
                    <div className="icon-img">
                        <img src="src/assets/favicon.png" alt="png" />
                    </div>
                    <div className="contact-data">
                        <h3>rajababushah.in@gmail.com</h3>
                    </div>
                </div>
                <div className="contact-data-row">
                    <div className="icon-img">
                        <img src="src/assets/favicon.png" alt="png" />
                    </div>
                    <div className="contact-data">
                        <h3>https://rajababushah.vercel.com</h3>
                    </div>
                </div>
            </div>

            <hr style={{width: "80%", margin: "1px auto"}} />

            <div className="contact-form">
                <form>
                    <label htmlFor="name">
                        <span className="label-title">Name</span><br />
                        <input type="text" name="name" id="name" required /> <br />
                    </label>
                    <label htmlFor="email">
                        <span className="label-title">Email </span> <br />
                        <input type="email" id='email' required /> <br />
                    </label>
                    <label htmlFor="message">
                        <span className="label-title">Message</span> <br />
                        <textarea name="" id="message" height="30px" required></textarea> <br />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <p className='copyright-info'>&copy; Copyright reserved; lifetime ownership</p>
        </div>
    )
}

export default Contact;