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
                <img alt="GitHub" src={gitHubIcon} />
                <img alt="LinkedIn" src={linkedInIcon} />
                <img alt="Email" src={emailIcon} />
                <img alt="Resume" src={resumeIcon} />
            </div>
        </div>
    )
}

export default Details;