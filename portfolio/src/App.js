
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import NoPage from './components/pages/NoPage.js';


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="Resume" element={<Resume />} />
            <Route path="Projects" element={<Projects/>} />
            <Route path="Contact" element={<Contact/>} />
            <Route path="Blog" element={<Blog/>} />
            <Route path="Skills" element={<Skills/>} />
            <Route path="*" element={<NoPage />}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}



export default App;