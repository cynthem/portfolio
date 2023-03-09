import React from 'react';
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
            <p>Have a question or want to work together? Reach out through any of the methods included here or by emailing <a href="mailto:cynthia.phelps807@gmail.com">cynthia.phelps807@gmail.com</a>.</p>
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
                <motion.a 
                    href='https://drive.google.com/file/d/1iLk_NT4k7Yi175M4vHUYz8eoK0-HnLiy/view'
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                >
                    <img alt="Resume" src={resumeIcon} />
                </motion.a>    
            </div>
        </div>
    );
}

export default Details;