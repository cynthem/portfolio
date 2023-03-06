import React from 'react';

interface Props {
    resumeShown: boolean;
}

function Resume({ resumeShown }: Props) {
    return (
        <div className={resumeShown ? 'resume-shown' : 'resume-not-shown'}>
            resume content placeholder
        </div>
    );
}

export default Resume;