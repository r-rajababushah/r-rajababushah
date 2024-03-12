import React from 'react'
import "./AdminPage.scss"

function AdminPage() {

    return (
        <div className="admin-panel">
                <div className="login-container">
                    <div className="user-img">
                        <img src="static/profile.jpg" alt="" />
                    </div>
                    <div className="user-credits">
                        <form action="" method="post">
                            <label id='emaillabel' htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}
export default AdminPage