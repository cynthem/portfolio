import React from 'react';
import About from './about/About';
import Skills from './Skills';
import Projects from './projects/Projects';
//import Contact from './contact/Contact';

function Main() {
    return (
        <div className='main'>
            <About />
            <Skills />
            <Projects />
        </div>
    );
}

export default Main;