import React from 'react';

interface Props {
    handleClick: () => void;
    resumeShown: boolean;
}

function Resume({ handleClick, resumeShown }: Props) {
    return (
        <div className={`resume ${resumeShown ? 'shown' : 'not-shown'}`}>
            <div className='resume-container'>
                here is some content
                <button
                    onClick={handleClick}
                >
                    Exit
                </button>
            </div>
        </div>
    );
}

export default Resume;