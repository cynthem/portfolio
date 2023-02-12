import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Heading from './Heading';
import Intro from './Intro';

function About() {
    const animation = useAnimation();    
    const [ref, inView, entry] = useInView({ threshold: 0.1 });

    useEffect(() => {
      if (inView) {
        animation.start("visible");
      } else {
        animation.start("hidden");
      }
    }, [animation, inView]);

    const animateDetails = {
        visible: {
            y: 0,
            scale: 1,
            staggerChildren: 0,
            delayChildren: 0,
            transition: { duration: 0.8 }
        },
        hidden: {
            y: 100,
            scale: 0.7, 
            originX: 1
        }
    }

    return (
        <div className='about'>
            <motion.div 
                className='about-background'
                ref={ref}
                animate={animation}
                initial={{scale: 1}}
                variants={animateDetails}
            >
                <div className='name'>
                    <h1 className='first'>Cindy</h1>
                    <h1 className='last'>Phelps</h1>
                </div>
                <Heading />
                <Intro />
            </motion.div>
        </div>
    )
}

export default About;