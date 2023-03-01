import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import uniqid from 'uniqid';
import Project from './Project';
import MoreProjects from './MoreProjects';
import projectPreviews from '../../util/projectPreviews';

function Projects() {
    const animation = useAnimation();    
    const [ref, inView, entry] = useInView({ threshold: 0 });

    useEffect(() => {
      if (inView) {
        animation.start("visible");
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
            scale: 0.8
        }
    }

    return (
        <div className='projects' id='projects'>
            <motion.div 
                className='projects-container'
                ref={ref}
                animate={animation}
                initial={{scale: 0.8}}
                variants={animateDetails}
            >
                <div className='projects-header'>
                    <p className='number'>03.</p>
                    <h2>Projects</h2>
                </div>
                <div className='projects-list'>
                    {projectPreviews.map((project) => {
                        return (
                            <Project 
                                key={uniqid()} 
                                project={project}
                            />
                        );
                    })}
                </div>
                <MoreProjects />
            </motion.div>
        </div>
    );
}

export default Projects;