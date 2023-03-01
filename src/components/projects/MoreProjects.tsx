import React, { useRef } from 'react';
import { Parallax, Background } from 'react-parallax';
import { motion, useScroll, useTransform } from 'framer-motion';
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
            <div className='more-projects-container'>
                <div className='more-projects-background'></div>
                <img alt='More projects' src={otherProjects} />
            </div>
            <motion.a 
                className='more-projects-link'
                href="https://github.com/doozles411"
                target="_blank"
                rel="noopener noreferrer"
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