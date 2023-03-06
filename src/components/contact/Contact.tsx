import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Details from './Details';
import EmailForm from './EmailForm';
import Footer from './Footer';

interface Props {
    setResumeShown: Dispatch<SetStateAction<boolean>>;
}

function Contact({ setResumeShown }: Props) {
    const animation = useAnimation();    
    const [ref, inView, entry] = useInView({ threshold: 0.1 });

    useEffect(() => {
      if (inView) {
        animation.start("visible");
      }
    }, [animation, inView]);

    const animateDetails = {
        visible: {
            y: 0,
            opacity: 1,
            staggerChildren: 1,
            delayChildren: 1,
            transition: { duration: 1 }
        },
        hidden: {
            y: 100,
            opacity: 0
        }
    }

    return (
        <div className='contact'>
            <motion.div 
                className='contact-header' 
                id='contact'
                ref={ref}
                animate={animation}
                initial={{opacity: 0}}
                variants={animateDetails}
            >
                <p className='number'>04.</p>
                <h2>Contact</h2>
            </motion.div>
            <div className='contact-details'>
                <motion.div 
                    className='details-top'
                    ref={ref}
                    animate={animation}
                    initial={{opacity: 0}}
                    variants={animateDetails}
                >
                    <Details 
                        setResumeShown={setResumeShown}
                    />
                    <EmailForm />
                </motion.div>
                <Footer />
            </div>
        </div>
    );
}

export default Contact;