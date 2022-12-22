import React, { useEffect } from 'react';
import Heading from './Heading';
import Intro from './Intro';

interface Props {
    scrollView: number;
}

function About({ scrollView }: Props) {

    useEffect(() => {
        if (scrollView > 20) {

        } else {}
    });

    return (
        <div className='about'>
            <div className='about-background'>
                <Heading />
                <Intro />
            </div>
        </div>
    );
}

export default About;