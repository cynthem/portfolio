import React from 'react';
import emailIcon from '../../assets/images/contact-icons/email_icon.svg';
import gitHubIcon from '../../assets/images/contact-icons/github_icon.svg';
import linkedInIcon from '../../assets/images/contact-icons/linkedin_icon.svg';

function Details() {
    return (
        <div className='details'>
            <p>Info details and resume link <a href='placeholder'>resume</a>.</p>
            <div className='details-links'>
                <img alt="GitHub" src={gitHubIcon} />
            </div>
        </div>
    )
}

export default Details;