import React from 'react';
import skillIcons from '../../util/skillIcons';

function SkillsLeft() {
    return (
        <div className='skills-left'>
            <div className='box-container'>
                <div className='box-row'>
                    <div className='skill'>
                        <img alt="HTML5" src={skillIcons[7]} />
                        <p>HTML5</p>
                    </div>
                    <div className='skill'>
                        <img alt="JavaScript" src={skillIcons[8]} />
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className='box-row'>
                    <div className='skill'>
                        <img alt="CSS3" src={skillIcons[1]} />
                        <p>CSS3</p>
                    </div>
                    <div className='skill react'>
                        <img alt="React" src={skillIcons[12]} />
                        <p>React</p>
                    </div>
                    <div className='skill'>
                        <img alt="SASS" src={skillIcons[14]} />
                        <p>SASS</p>
                    </div>
                </div>
                <div className='box-row'>
                    <div className='skill'>
                        <img alt="Redux" src={skillIcons[13]} />
                        <p>Redux</p>
                    </div>
                    <div className='skill'>
                        <img alt="Styled Components" src={skillIcons[15]} />
                        <p>Styled Components</p>
                    </div>
                </div>
                <div className='box-row'>
                    <div className='skill'>
                        <img alt="Framer Motion" src={skillIcons[4]} />
                        <p>Framer Motion</p>
                    </div>
                    <div className='skill'>
                        <img alt="Bootstrap" src={skillIcons[0]} />
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsLeft;