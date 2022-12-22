import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Intro from './Intro';

interface Props {
    scrollView: number;
}

function About({ scrollView }: Props) {
    const [inView, setInView] = useState(true);

    useEffect(() => {
        if (scrollView < 20) {
            setInView(true);
        } else {
            setInView(false);
        }
    }, [scrollView]);

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