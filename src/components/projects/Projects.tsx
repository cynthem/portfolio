import React from 'react';
import uniqid from 'uniqid';
import ProjectContainer from './ProjectContainer';
import Cluster from './Cluster';
import projectPreviews from '../../util/projectPreviews';

function Projects() {
    return (
        <div className='projects'>
            <div className='projects-background'>
                <div className='projects-header' id='projects'>
                    <p className='number'>03.</p>
                    <h2>Projects</h2>
                </div>
                <div className='projects-list'>
                    {projectPreviews.map((project) => {
                        return (
                            <ProjectContainer 
                                key={uniqid()} 
                                project={project}
                            />
                        )
                    })}
                </div>
                <Cluster />
            </div>
        </div>
    )
}

export default Projects;