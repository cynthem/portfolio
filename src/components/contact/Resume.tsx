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
                    here is some content
                </div>
            </div>
        </div>
    );
}

export default Resume;