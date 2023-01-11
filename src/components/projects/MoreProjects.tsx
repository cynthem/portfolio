import React from 'react';
import otherProjects from '../../assets/images/project-imgs/otherProj.jpg';
import arrowIcon from '../../assets/images/arrow_icon.png';

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
    )
}

export default MoreProjects;