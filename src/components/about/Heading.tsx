import React from 'react';
import selfie from '../../assets/images/placeholder-selfie.jpeg';

function Heading() {
    return (
        <div className='heading'>
            <div className='name'>
                <h1 className='first'>Cindy</h1>
                <h1 className='last'>Phelps</h1>
            </div>
            <div className='heading-container'>
                <div className='selfie'>
                    <div className='selfie-outline'></div>
                    <img 
                        className='selfie-img'
                        alt="Selfie"
                        src={selfie}
                    />
                </div>
                <div className='job-title'>
                    <p>Hello! I am a</p>
                    <h2>Front-end Developer</h2>
                </div>
            </div>
        </div>
        /*  <div className='image-title'>
                <div className='image-outline'></div>
                <motion.div
                    initial={{ y: 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    animate={{ y: 0 }}
                >
                        <img 
                            className='selfie-img'
                            alt="Selfie"
                            src={selfie}
                        />
                </motion.div>
                <div className='title-text'>
                    <WindupChildren>
                        <Pace getPace={(char) => (char === " " ? 100 : 40)}>
                            <p>
                                {"Hello! I am a"}
                            </p>
                        </Pace>
                        <Pause ms={500} />
                        <Pace getPace={(char) => (char === " " ? 400 : 100)}>
                            <h2>
                                {"Front-end Developer"}
                            </h2>
                        </Pace>
                    </WindupChildren>
                </div>
            </div>*/
    );
}

export default Heading;