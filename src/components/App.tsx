import React, { useState, useEffect, useRef } from "react";
import LeftPanel from './navigation/LeftPanel';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './contact/Footer';
import '../sass/main.scss';

export function App() {
  return (
    <div className='app'>
        <LeftPanel />
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