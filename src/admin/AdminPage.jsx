import React, { useState } from 'react'
import "./AdminPage.scss"
import { NavLink } from 'react-router-dom';

function AdminPage() {

    const emailVal = "rajababushah.in@gmail.com";
    const passwordVal = "Iamme<3";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === emailVal && password === passwordVal) {
            
        } else {
            setEmail((e) => "Haha, Your are not admin");
        }
    }

    return (
        <div className="admin-panel">
            <div className="login-container">
                <div className="user-img">
                    <img src="static/profile.jpg" alt="" />
                </div>
                <div className="user-credits">
                    <form onSubmit={handleSubmit}>
                        <label id='emaillabel' htmlFor="email">Email</label>
                        <input type="email" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminPage