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
                    <div className='more-background top'>
                        <img 
                            alt='More projects'
                            src={weatherImg}
                        />
                    </div>
                    <div className='more-background middle'>
                        <img 
                            alt='More projects'
                            src={etchImg}
                        />
                    </div>
                    <div className='more-background bottom'>
                        <img 
                            alt='More projects'
                            src={signupImg}
                        />
                    </div>
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