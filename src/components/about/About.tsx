import React from 'react';
import Heading from './Heading';
import Intro from './Intro';

function About() {
    return (
        <div className='about'>
            <div className='about-background'>
                <Heading />
                <Intro />
            </div>
        </div>
    )
}

export default About;