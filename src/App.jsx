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
import AdminControlPanel from './admin/AdminControlPanel';

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
                    <Route path='/admincontrolpanel' element={<AdminControlPanel />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;