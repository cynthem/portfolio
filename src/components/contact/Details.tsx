import React from 'react';
import { motion } from 'framer-motion';
import gitHubIcon from '../../assets/images/contact-icons/github_icon.svg';
import linkedInIcon from '../../assets/images/contact-icons/linkedin_icon.svg';
import resumeIcon from '../../assets/images/contact-icons/resume_icon.svg';

function Details() {
    return (
        <div className='details'>
            <p>I'm currently open to new opportunities! Don't hesitate to reach out if you're interested in working together, have any questions, or just want to drop me a line.</p>
            <div className='details-links'>
                <motion.a 
                    href="https://github.com/doozles411"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img alt="GitHub" src={gitHubIcon} />
                </motion.a>
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