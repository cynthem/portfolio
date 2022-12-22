import React from 'react';
import gitHubIcon from '../../assets/images/contact-icons/github_icon.svg';
import linkedInIcon from '../../assets/images/contact-icons/linkedin_icon.svg';
import resumeIcon from '../../assets/images/contact-icons/resume_icon.svg';

function Details() {
    return (
        <div className='details'>
            <p>Info details and resume link <a href='placeholder'>resume</a>. More content to display what this would look like with a few sentences instead of just one short one for styling purposes.</p>
            <div className='details-links'>
                <a 
                    href="https://github.com/doozles411"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img alt="GitHub" src={gitHubIcon} />
                </a>
                <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img alt="LinkedIn" src={linkedInIcon} />
                </a>
                <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img alt="Resume" src={resumeIcon} />
                </a>    
            </div>
        </div>
    );
}

export default Details;