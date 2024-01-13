import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


function Blog() {
    const [text, setText] = useState('');

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Rajababu Shah - Blog</title>
                </Helmet>
                <div className='My Blog' style={{ padding: "10px" }}>
                    <div className="myPost">
                        <h2 style={{ color: "red" }}>The life i got</h2>
                        <p style={{ fontWeight: "bold" }}>DATA NOT WRITTEN BY USER</p>
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}

export default Blog