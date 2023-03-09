import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    handleClick: () => void;
    resumeShown: boolean;
}

function Resume({ handleClick, resumeShown }: Props) {
    return (
        <div className={`resume ${resumeShown ? 'shown' : 'not-shown'}`}>
            <div className='resume-container'>
                <motion.button 
                    onClick={handleClick}
                    whileHover={{
                        color: '#ffa600',
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    Close
                </motion.button>
                <div className='resume-content'>
                    <div className='resume-top'>
                        <div className='resume-top-name'></div>
                        <div className='resume-top-contact'></div>
                        <div className='resume-top-divider'></div>
                        <div className='resume-top-profile'></div>
                    </div>
                    <div className='resume-experience'>
                        <div className='resume-experience-title'></div>
                        <div className='resume-experience-1'></div>
                        <div className='resume-experience-2'></div>
                        <div className='resume-experience-3'></div>
                    </div>
                    <div className='resume-education'>
                        <div className='resume-education-title'></div>
                        <div className='resume-education-school'></div>
                    </div>
                    <div className='resume-skills'>
                        <div className='resume-skills-title'></div>
                        <div className='resume-skills-list'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;