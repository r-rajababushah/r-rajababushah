import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';


function Blog() {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('./src/pages/Blog/words.txt')
            .then(response => response.text())
            .then(data => setText(data));
    }, []);

    return (
        <>
            <Helmet>
                <title>Rajababu Shah - Blog</title>
            </Helmet>
            <div className='My Blog' style={{ padding: "10px" }}>
                <div className="myPost">
                    <h2 style={{ color: "red" }}>The life i got</h2>
                    <p style={{ fontWeight: "bold" }}>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Blog