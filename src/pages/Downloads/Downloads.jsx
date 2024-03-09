import React from 'react';
import "./Downloads.scss";

function Downloads() {
    return (
        <div className='downloads'>
            <table className="download-links">
                <thead>
                    <tr>
                        <th>Products/Softwares</th>
                        <th>Download Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Video Editor Activation Code:</td>
                        <td><a href="/Files/VSDC.txt" className="vsdc-codes-download-link" download>Dwonload VSDC free activation Codes</a></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default Downloads