import React from 'react';
import Heading from './Heading';
import Intro from './Intro';
import { motion } from "framer-motion"

function About() {
    return (
        <motion.div>
            <div className='about'>
                <div className='about-background'>
                    <Heading />
                    <Intro />
                </div>
            </div>
        </motion.div>
    )
}

export default About;