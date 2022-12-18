import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftPanel from './components/LeftPanel';
import About from './components/about/About';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import './sass/main.scss';

export const App: React.FC = () => {
  const [inView, setInView] = useState<Number | undefined>(0);

  function handleView(view: Number) {
    setInView(view);
  }

  return (
    <div className='app'>
      <LeftPanel 
        //inView={inView}
        //handleView={handleView}
      />
      <div className='pages'>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}