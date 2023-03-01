import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import arrowIcon from '../../assets/images/arrow_icon.png';

interface Props {
    project: any;
}

function Project({ project }: Props) {

    const animateBtn = {
        rest: {
            color: 'black',
            transition: { duration: 0.5 }
        },
        hover: {
            color: '#ffa600', 
            transition: { duration: 0.5 }
        },
        tap: {
            color: 'red'
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
        <div className='project-container'>
            <ParallaxProvider>
                <div className='project-image'>
                    <div className='project-outline'></div>
                    <Parallax
                        className='project-parallax'
                        translateY={[ '-10%', '10%' ]}
                    >
                        <img
                            alt={project.name}
                            src={project.image}
                        />
                    </Parallax>
                </div>
            </ParallaxProvider>
            <div className='project-card'>
                <h3>{project.name}</h3>
                <div className='card-container'>
                    <div className='card-description'>{project.description}</div>
                    <div className='break'></div>
                    <div className='card-tools'>{project.tools}</div>
                    <div className='card-links'>
                        <motion.a 
                            href={project.siteLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            variants={animateBtn}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                            animate="rest"
                        >
                            Live
                            <motion.img 
                                alt="Arrow icon" 
                                src={arrowIcon} 
                                variants={animateIcon}
                            />
                        </motion.a>
                        <motion.a 
                            href={project.gitHubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            variants={animateBtn}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                            animate="rest"
                        >
                            Code
                            <motion.img 
                                alt="Arrow icon" 
                                src={arrowIcon} 
                                variants={animateIcon}
                            />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;