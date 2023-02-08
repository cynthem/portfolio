import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import Intro from './Intro';

function About() {
    return (
        <div className='about'>
            <Heading />
            <Intro />
        </div>
    )
}

export default About;