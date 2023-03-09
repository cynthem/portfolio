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
                        <div className='resume-top-name'>
                            <h1>Cindy Phelps</h1>
                            <p>Front-end Developer</p>
                            <p>cynthia.phelps807@gmail.com</p>
                        </div>
                        <div className='resume-top-divider'></div>
                        <div className='resume-top-profile'>
                            details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails
                        </div>
                    </div>
                    <div className='resume-experience'>
                        <div className='resume-experience-title'>
                            <h2>EXPERIENCE</h2>
                        </div>
                        <div className='resume-experience-item'>
                            <div className='experience-details'>
                                <div className='details-left'>
                                    <h3>Moderation Team Lead</h3>
                                    <p>RealSelf</p>
                                </div>
                                <div className='details-right'>
                                    <p>Seattle, WA</p>
                                    <p>March 2019 - Sept. 2021</p>
                                </div>
                            </div>
                            <ul className='experience-duties'>
                                <li>details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails</li>
                                <li>details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails</li>
                                <li>details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails</li>
                            </ul>
                        </div>
                        <div className='resume-experience-item'>
                            <div className='experience-details'>
                                <div className='details-left'>
                                    <h3>Moderation Team Lead</h3>
                                    <p>RealSelf</p>
                                </div>
                                <div className='details-right'>
                                    <p>Seattle, WA</p>
                                    <p>March 2019 - Sept. 2021</p>
                                </div>
                            </div>
                            <ul className='experience-duties'>
                                <li>details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails</li>
                                <li>details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails</li>
                                <li>details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails</li>
                            </ul>
                        </div>
                        <div className='resume-experience-item'>
                            <div className='experience-details'>
                                <div className='details-left'>
                                    <h3>Moderation Team Lead</h3>
                                    <p>RealSelf</p>
                                </div>
                                <div className='details-right'>
                                    <p>Seattle, WA</p>
                                    <p>March 2019 - Sept. 2021</p>
                                </div>
                            </div>
                            <ul className='experience-duties'>
                                <li>details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails</li>
                                <li>details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails details schmetails</li>
                            </ul>
                        </div>
                    </div>
                    <div className='resume-education'>
                        <div className='resume-education-title'>
                            <h2>EDUCATION</h2>
                        </div>
                        <div className='resume-education-school'>
                            <h3>Seattle University</h3>
                            <p>Bachelor of Science in Psychology</p>
                            <p>Sept. 2004 to June 2008</p>
                        </div>
                    </div>
                    <div className='resume-skills'>
                        <div className='resume-skills-title'>
                            <h2>SKILLS</h2>
                        </div>
                        <div className='resume-skills-list'>
                            <ul className='skills-left'>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                            <ul className='skills-right'>
                                <li>jQuery</li>
                                <li>TypeScript</li>
                                <li>CSS Preprocessors</li>
                                <li>Jest</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;