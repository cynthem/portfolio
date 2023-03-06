import React from 'react';

interface Props {
    resumeShown: boolean;
}

function Resume({ resumeShown }: Props) {
    return (
        <div className={`resume ${resumeShown ? 'shown' : 'not-shown'}`}>
            <div className='resume-container'>
                here is some content
                <button>Exit</button>
            </div>
        </div>
    );
}

export default Resume;