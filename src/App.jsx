import React from 'react';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import LastSection from './components/LastSection';
import "./App.css";
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <Header />
            <FirstSection />

            <SecondSection />
            <LastSection /> 
        </>
    );
}

export default App;