import React from 'react';
import { motion } from 'framer-motion';
import gitHubIcon from '../../assets/images/contact-icons/github_icon.svg';
import linkedInIcon from '../../assets/images/contact-icons/linkedin_icon.svg';
import resumeIcon from '../../assets/images/contact-icons/resume_icon.svg';

function Details() {
    return (
        <div className='details'>
            <p>Want to chat? Interested in working together? Have any questions? Reach me through any of the methods listed here or email <a href="mailto:cynthia.phelps807@gmail.com">cynthia.phelps807@gmail.com</a>.</p>
            <div className='details-links'>
                <motion.a 
                    href="https://github.com/cynthem"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img 
                        alt="GitHub" 
                        src={gitHubIcon} 
                    />
                </motion.a>
                <motion.a 
                    className='linkedin-icon'
                    href="https://www.linkedin.com/in/cindy-m-phelps"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img 
                        alt="LinkedIn" 
                        src={linkedInIcon} 
                    />
                </motion.a>
                <motion.a 
                    href='https://drive.google.com/file/d/1gB2zIe8wARYNYEp4CKBuOUhch-V96Z6X/view?usp=sharing'
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img 
                        alt="Resume" 
                        src={resumeIcon} 
                    />
                </motion.a>    
            </div>
        </div>
    );
}

export default Details;