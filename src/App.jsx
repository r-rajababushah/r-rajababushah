import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Homepage/Home';
import Skills from './pages/Skillspage/Skills';
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path='/skills' element={<Skills />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;