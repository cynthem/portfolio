import React from 'react';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function Main() {
    return (
        <div className='main'>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default Main;