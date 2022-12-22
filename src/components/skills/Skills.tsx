import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import skillIcons from '../../util/skillIcons';

interface Props {
    scrollView: number;
}

function Skills({ scrollView }: Props) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (scrollView < 19) {
            setInView(false);
        } else if (scrollView >= 19 && scrollView <= 35) {
            setInView(true);
        } else if (scrollView > 35) {
            setInView(false);
        }
    }, [scrollView]);

    return (
        <div className='skills'>
            <div className='skills-header' id='skills'>
                <p className='number'>02.</p>
                <h2>Skills</h2>
            </div>
            <div className='skills-boxes'>
                <div className='skills-row-1'>
                    <div className='skill'>
                        <img alt="HTML5" src={skillIcons[6]} />
                        <p>HTML5</p>
                    </div>
                    <div className='skill'>
                        <img alt="CSS3" src={skillIcons[1]} />
                        <p>CSS3</p>
                    </div>
                    <div className='skill'>
                        <img alt="JavaScript" src={skillIcons[7]} />
                        <p>JavaScript</p>
                    </div>
                    <div className='skill'>
                        <img alt="TypeScript" src={skillIcons[16]} />
                        <p>TypeScript</p>
                    </div>
                    <div className='skill'>
                        <img alt="jQuery" src={skillIcons[9]} />
                        <p>jQuery</p>
                    </div>
                    <div className='skill'>
                        <img alt="React" src={skillIcons[12]} />
                        <p>React</p>
                    </div>
                </div>
                <div className='skills-row-2'>
                    <div className='skill'>
                        <img alt="Redux" src={skillIcons[13]} />
                        <p>Redux</p>
                    </div>
                    <div className='skill'>
                        <img alt="Python" src={skillIcons[11]} />
                        <p>Python</p>
                    </div>
                    <div className='skill'>
                        <img alt="Sass" src={skillIcons[14]} />
                        <p>Sass</p>
                    </div>
                    <div className='skill'>
                        <img alt="Bootstrap" src={skillIcons[0]} />
                        <p>Bootstrap</p>
                    </div>
                    <div className='skill'>
                        <img alt="Styled Components" src={skillIcons[15]} />
                        <p>Styled Components</p>
                    </div>
                    <div className='skill'>
                        <img alt="Jest" src={skillIcons[8]} />
                        <p>Jest</p>
                    </div>
                </div>
                <div className='skills-row-3'>
                    <div className='skill'>
                        <img alt="Framer Motion" src={skillIcons[3]} />
                        <p>Framer Motion</p>
                    </div>
                    <div className='skill'>
                        <img alt="Git" src={skillIcons[4]} />
                        <p>Git</p>
                    </div>
                    <div className='skill'>
                        <img alt="GitHub" src={skillIcons[5]} />
                        <p>GitHub</p>
                    </div>
                    <div className='skill'>
                        <img alt="Webpack" src={skillIcons[17]} />
                        <p>Webpack</p>
                    </div>
                    <div className='skill'>
                        <img alt="Node.js" src={skillIcons[10]} />
                        <p>Node.js</p>
                    </div>
                    <div className='skill'>
                        <img alt="Firebase" src={skillIcons[2]} />
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;