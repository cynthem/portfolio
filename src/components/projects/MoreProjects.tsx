import React from 'react';
import etchImg from '../../assets/images/project-imgs/etch.jpg';
import weatherImg from '../../assets/images/project-imgs/weather.jpg';
import signupImg from '../../assets/images/project-imgs/signup.jpg';

function MoreProjects() {
    return (
        <div className='more-projects'>
            <div className='more-container'>
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
        </div>
    )
}

export default MoreProjects;