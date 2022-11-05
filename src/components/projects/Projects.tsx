import React from 'react';
import Project from './Project';
import projectPreviews from '../../util/projectPreviews';
import uniqid from 'uniqid';

function Projects() {
    return (
        <div className='projects'>
            <div className='projects-header' id='projects'>
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
        </div>
    )
}

export default Projects;