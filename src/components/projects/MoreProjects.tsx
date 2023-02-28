import React, { useRef } from 'react';
import { 
    motion, 
    useScroll, 
    useSpring, 
    useTransform,
    MotionValue 
} from 'framer-motion';
import otherProjects from '../../assets/images/project-imgs/otherProj.jpg';
import arrowIcon from '../../assets/images/icon_arrow_orange.png';

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

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