import React from 'react';
import SkillsLeft from './SkillsLeft';
//import SkillsRight from './SkillsRight';

function Skills() {
    return (
        <div className='skills'>
            <div className='skills-header' id='skills'>
                <p className='number'>02.</p>
                <h2>Skills</h2>
            </div>
            <div className='skills-boxes'>
                <SkillsLeft />
                
            </div>
        </div>
    );
}

export default Skills;