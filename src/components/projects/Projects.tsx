import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import uniqid from 'uniqid';
import Project from './Project';
import MoreProjects from './MoreProjects';
import projectPreviews from '../../util/projectPreviews';

interface Props {
    scrollView: number;
}

function Projects({ scrollView }: Props) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (scrollView < 35) {
            setInView(false);
        } else if (scrollView >= 35 && scrollView <= 94) {
            setInView(true);
        } else if (scrollView > 94) {
            setInView(false);
        }
    }, [scrollView]);

    return (
        <div className='projects' id='projects'>
            <div className='projects-container'>
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
                        )
                    })}
                </div>
                <MoreProjects />
            </div>
        </div>
    )
}

export default Projects;