import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import AboutPage from './pages/AboutPage';
import IventsPage from './pages/IventsPage';
import Menu from './pages/Menu';
import Contacs from './pages/Contacs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
      <Routes>
        <Route path="MainPage" element={<MainPage />} />
        <Route path="AboutPage" element={<AboutPage />} />
        <Route path="IventsPage" element={<IventsPage />} />
        <Route path='Menu' element={<Menu/>} />
        <Route path='Contacs' element={<Contacs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
