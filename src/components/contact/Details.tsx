import React from 'react';
import gitHubIcon from '../../assets/images/contact-icons/github_icon.svg';
import linkedInIcon from '../../assets/images/contact-icons/linkedin_icon.svg';
import emailIcon from '../../assets/images/contact-icons/email_icon.svg';
import resumeIcon from '../../assets/images/contact-icons/resume_icon.svg';

function Details() {
    return (
        <div className='details'>
            <p>Info details and resume link <a href='placeholder'>resume</a>.</p>
            <div className='details-links'>
                <a href="#">
                    <img alt="GitHub" src={gitHubIcon} />
                </a>
                <a href="#">
                    <img alt="LinkedIn" src={linkedInIcon} />
                </a>
                <a href="#">
                    <img alt="Email" src={emailIcon} />
                </a>
                <a href="#">
                    <img alt="Resume" src={resumeIcon} />
                </a>    
            </div>
        </div>
    )
}

export default Details;