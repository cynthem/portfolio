import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import Intro from './Intro';

interface Props {
    scrollView: number;
}

function About({ scrollView }: Props) {
    const [inView, setInView] = useState(true);

    useEffect(() => {
        if (scrollView < 19) {
            setInView(true);
        } else {
            setInView(false);
        }
    }, [scrollView]);

    const aboutInView = <motion.div
            className='about-background'
            animate={{ scale: 1 }}
        >
            <Heading />
            <Intro />
        </motion.div>
    
    const aboutOutView = <motion.div
            className='about-background'
            style={{ originX: 1 }}
            animate={{ scale: 0.8 }}
        >
            <Heading />
            <Intro />
        </motion.div>

    return (
        <div className='about'>
            {inView ? aboutInView : aboutOutView}
        </div>
    );
}

export default About;