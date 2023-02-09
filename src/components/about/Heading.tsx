import React from 'react';
import { motion } from 'framer-motion';
import { WindupChildren, Pace, Pause } from "windups";
import selfie from '../../assets/images/placeholder-selfie.jpeg';

function Heading() {
    return (
        <div className='heading'>
            <div className='name'>
                <h1 className='first'>Cindy</h1>
                <h1 className='last'>Phelps</h1>
            </div>
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
            </div>
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
    )
}

export default Heading;