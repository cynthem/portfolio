import React from 'react';

interface Props {
    resumeShown: boolean;
}

function Resume({ resumeShown }: Props) {
    return (
        <div className='resume'>
            resume content placeholder
        </div>
    );
}

export default Resume;