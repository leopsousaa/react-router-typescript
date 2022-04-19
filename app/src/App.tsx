import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from './pages/about/About';
import AuthPage from './pages/auth/Auth';
import HomePage from './pages/home/Home';
import ReportPage from './pages/report/Report';

export interface IAppRoutes {}

const App: React.FC<IAppRoutes> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="report" element={<ReportPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
