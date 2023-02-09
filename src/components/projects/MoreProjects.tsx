import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import otherProjects from '../../assets/images/project-imgs/otherProj.jpg';
import arrowIcon from '../../assets/images/icon_arrow_orange.png';

function MoreProjects() {
    return (
        <div className='more-projects'>
            <div className='more-projects-background'>
                <img 
                    alt='More projects' 
                    src={otherProjects}
                />
            </div>
            <div className='more-projects-link'>
                <h3>More projects</h3>
                <img alt="Arrow icon" src={arrowIcon} />
            </div>
        </div>
    );
}

export default MoreProjects;