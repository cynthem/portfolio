import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import Intro from './Intro';

function About() {
    return (
        <div className='about'>
            <div className='about-background'>
                <div className='name'>
                    <h1 className='first'>Cindy</h1>
                    <h1 className='last'>Phelps</h1>
                </div>
                <Heading />
                <Intro />
            </div>
        </div>
    )
}

export default About;