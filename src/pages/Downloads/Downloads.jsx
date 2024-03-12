import React from 'react';
import "./Downloads.scss";
import { Helmet } from 'react-helmet';

function Downloads() {
    return (
        <div className='downloads'>
            <Helmet>
                <title>Rajababu Shah - Downloads </title>
            </Helmet>
            <div className="android-apps">
                <table className="download-links">
                    <caption>Android Apps</caption>
                    <thead>
                        <tr>
                            <th>Apps</th>
                            <th>Download Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>VN Video Editor</td>
                            <td><a href="https://tii.la/Videoeditor-vn" className="download-link" download>VN Video Editor.apk</a></td>
                        </tr>
                        <tr>
                            <td>InShot Video Editor</td>
                            <td><a href="https://tii.la/inshot" className="download-link">InShot.apk</a></td>
                        </tr>
                        <tr>
                            <td>Kinemaster Video Editor</td>
                            <td><a href="https://tii.la/kinemaster" className="download-link">Kinemaster.apk</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="windows-apps">
                <table className="download-links">
                    <caption>Windows Apps</caption>
                    <thead>
                        <tr>
                            <th>Products/Softwares</th>
                            <th>Download Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>VSDC Video Editor Download Link:</td>
                            <td><a href="https://www.videosoftdev.com/services/download.aspx?ProductID=1" className='download-link' download>VSDC Video Editor</a></td>
                        </tr>
                        <tr>
                            <td>Video Editor Activation Code:</td>
                            <td><a href="/Files/VSDC.txt" className="download-link" download>Dwonload VSDC free activation Codes</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Downloads