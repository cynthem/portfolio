import React from 'react';

interface Props {
    handleClick: () => void;
    resumeShown: boolean;
}

function Resume({ handleClick, resumeShown }: Props) {
    return (
        <div className={`resume ${resumeShown ? 'shown' : 'not-shown'}`}>
            <div className='resume-container'>
                <button onClick={handleClick}>Close</button>
                <div className='resume-content'>
                    here is some content
                </div>
            </div>
        </div>
    );
}

export default Resume;