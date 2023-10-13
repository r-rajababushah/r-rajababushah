import "./ProfileCard.scss";

const ProfileCard = () => {

    let imgURL = "src/components/assets/profile.jpg";

    if (navigator.onLine) {
        imgURL = "https://i.ibb.co/RCP6CL3/Me-Profile-Pic.jpg"
    }

    return (
        <div className="profile-container">

            <div className="profile-photo">
                <img src={imgURL} height={300} alt="PROFILE" />
            </div>

            <div className="profile-detail">
                <div className="firstSectionProfile">
                    <h3>Hello & Welcome</h3>
                </div>
                <div className="secondSectionProfile">
                    <h3>I'M RAJABABU SHAH </h3> <br />
                    <h5>Developing Web Application</h5>

                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td>Birth Date</td>
                                <td>13th May</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>New Delhi, India</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>rajababushah.in@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>+917319806300</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className="lastSectionProfile">
                    THE ENDING, TO ALL STORIES IS WRITTEN BY DESTINY
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;