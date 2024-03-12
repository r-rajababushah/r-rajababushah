import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Homepage/Home';
import Skills from './pages/Skillspage/Skills';
import Education from './pages/Education/Education';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import "./App.css";
import Downloads from './pages/Downloads/Downloads';
import AdminPage from './admin/AdminPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/education' element={<Education />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/downloads' element={<Downloads />} />
                    <Route path='/admin' element={<AdminPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;