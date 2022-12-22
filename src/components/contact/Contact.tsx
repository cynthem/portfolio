import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Details from './Details';
import EmailForm from './EmailForm';

function Contact() {
    const animation = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.6 });

    useEffect(() => {
        if (inView) {
            animation.start('visible');
        }
    }, [inView]);

    const animateDetails = {
        visible: {
            y: 0,
            opacity: 1,
            staggerChildren: 1,
            delayChildren: 1,
            transition: {
                duration: 1.5
            }
        },
        hidden: {
            y: '10vw',
            opacity: 0
        }
    }

    return (
        <div className='contact' ref={ref}>
            <motion.div 
                className='contact-header' 
                id='contact'
                initial='hidden'
                animate={animation}
                variants={animateDetails}
            >
                <p className='number'>04.</p>
                <h2>Contact</h2>
            </motion.div>
            <motion.div 
                className='contact-details'
                initial='hidden'
                animate={animation}
                variants={animateDetails}
            >
                <Details />
                <EmailForm />
            </motion.div>
        </div>
    );
}

export default Contact;