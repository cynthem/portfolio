import React from 'react';
import { motion } from 'framer-motion';
import { WindupChildren, Pace, Pause } from "windups";
import selfie from '../../assets/images/selfie.jpg';

function Heading() {
    return (
        <div className='heading'>
            <div className='selfie'>
                <div className='selfie-outline'></div>
                <motion.img
                    className='selfie-img'
                    alt="Selfie"
                    src={selfie}
                    initial={{ y: 24, x: 24 }}
                    animate={{ y: 0, x: 0 }}
                    transition={{ duration: 1 }}
                >
                </motion.img>
                <div className='job-title'>
                    <WindupChildren>
                        <Pace getPace={(char) => (char === " " ? 100 : 40)}>
                            <p>{"Hello! I am a"}</p>
                        </Pace>
                        <Pause ms={300} />
                        <Pace getPace={(char) => (char === " " ? 200 : 70)}>
                            <h2>{"Front-end Developer"}</h2>
                        </Pace>
                    </WindupChildren>
                </div>
            </div>
        </div>
    );
}

export default Heading;