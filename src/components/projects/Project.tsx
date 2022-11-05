import React from 'react';
import arrowIcon from '../../assets/images/arrow_icon.png';

function Project({ project }: { project: any }) {
    return (
        <div className='project-container'>
            <img 
                alt={project.name}
                src={project.image}
            />
            <div className='project-card'>
                <h3>{project.name}</h3>
                <div className='card-container'>
                    <div className='card-description'>
                        {project.description}
                    </div>
                    <div className='break'></div>
                    <div className='card-tools'>
                        {project.tools}
                    </div>
                    <div className='card-links'>
                        <a href={project.siteLink}>
                            Live
                            <img alt="Arrow icon" src={arrowIcon} />
                        </a>
                        <a href={project.gitHubLink}>
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