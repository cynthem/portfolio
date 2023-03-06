import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import gitHubIcon from '../../assets/images/contact-icons/github_icon.svg';
import linkedInIcon from '../../assets/images/contact-icons/linkedin_icon.svg';
import resumeIcon from '../../assets/images/contact-icons/resume_icon.svg';

interface Props {
    handleClick: () => void;
}

function Details({ handleClick }: Props) {
    return (
        <div className='details'>
            <p>I am currently open to new opportunities. Don't hesitate to reach out if you're interested in working together or have any questions for me.</p>
            <div className='details-links'>
                <motion.a 
                    href="https://github.com/doozles411"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img alt="GitHub" src={gitHubIcon} />
                </motion.a>
                <motion.a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img alt="LinkedIn" src={linkedInIcon} />
                </motion.a>
                <motion.button 
                    //href="#"
                    //target="_blank"
                    //rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleClick}
                >
                    <img alt="Resume" src={resumeIcon} />
                </motion.button>    
            </div>
        </div>
    );
}

export default Details;