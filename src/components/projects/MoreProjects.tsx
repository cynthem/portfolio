import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import otherProjects from '../../assets/images/project-imgs/otherProj.jpg';
import arrowIcon from '../../assets/images/icon_arrow_orange.png';

function MoreProjects() {
    const animateBtn = {
        rest: {
            scale: 1,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.5 }
        },
        tap: {
            scale: 0.9
        }
    }

    const animateIcon = {
        rest: {
            rotate: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            rotate: 45,
            transition: { duration: 0.5 }
        }
    }

    return (
        <div className='more-projects'>
            <div className='more-projects-background'>
                <img 
                    alt='More projects' 
                    src={otherProjects}
                />
            </div>
            <motion.a 
                className='more-projects-link'
                variants={animateBtn}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                animate="rest"
            >
                <h3>More projects</h3>
                <motion.img 
                    alt="Arrow icon" 
                    src={arrowIcon}
                    variants={animateIcon}
                />
            </motion.a>
        </div>
    );
}

export default MoreProjects;