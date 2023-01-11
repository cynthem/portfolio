import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import arrowIcon from '../../assets/images/arrow_icon.png';

interface Props {
    project: any;
    inView: boolean;
}

function Project({ project, inView }: Props) {
    const containerRef = useRef(null);

    /*const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    });*/

    //const imageValue = useTransform(scrollYProgress, [0, 1], ['-10%', '100%']);

    return (
        <div className='project-container' ref={containerRef}>
            <div className='project-image'>
                <div className='project-outline'></div>
                <motion.img
                    alt={project.name}
                    src={project.image}
                    //style={{ translateY: imageValue }}
                >
                </motion.img>
            </div>
            <div className='project-card'>
                <h3>{project.name}</h3>
                <div className='card-container'>
                    <div className='card-description'>{project.description}</div>
                    <div className='break'></div>
                    <div className='card-tools'>{project.tools}</div>
                    <div className='card-links'>
                        <a 
                            href={project.siteLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Live
                            <img alt="Arrow icon" src={arrowIcon} />
                        </a>
                        <a 
                            href={project.gitHubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Code
                            <img alt="Arrow icon" src={arrowIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;