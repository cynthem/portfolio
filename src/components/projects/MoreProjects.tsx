import React from 'react';
import weatherImg from '../../assets/images/project-imgs/weather.jpg';
import etchImg from '../../assets/images/project-imgs/etch.jpg';
import signupImg from '../../assets/images/project-imgs/signup.jpg';
import arrowIcon from '../../assets/images/arrow_icon.png';

function MoreProjects() {
    return (
        <div className='more-projects'>
            <div className='more-container'>
                <div className='more-imgs'>
                    <img 
                        alt='More projects'
                        src={weatherImg}
                    />
                    <img 
                        alt='More projects'
                        src={etchImg}
                    />
                    <img 
                        alt='More projects'
                        src={signupImg}
                    />
                </div>
                <div className='more-link'>
                    <a
                        href='http://github.com/doozles411?tab=repositories'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        View more projects
                        <img 
                            alt='View more projects'
                            src={arrowIcon}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MoreProjects;