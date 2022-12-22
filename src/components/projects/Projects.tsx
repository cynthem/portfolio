import React from 'react';
import uniqid from 'uniqid';
import Project from './Project';
import MoreProjects from './MoreProjects';
import projectPreviews from '../../util/projectPreviews';

function Projects() {
    return (
        <div className='projects' id='projects'>
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
    )
}

export default Projects;