import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import gitHubIcon from '../../assets/images/contact-icons/github_icon.svg';
import linkedInIcon from '../../assets/images/contact-icons/linkedin_icon.svg';
import resumeIcon from '../../assets/images/contact-icons/resume_icon.svg';

function Details() {
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
        <motion.div 
            className='details'
            ref={ref}
            animate={animation}
            initial={{opacity: 0}}
            variants={animateDetails}
        >
            <p>I am currently open to new opportunities. Don't hesitate to reach out if you're interested in working together or have any questions for me.</p>
            <div className='details-links'>
                <motion.a 
                    href="https://github.com/doozles411"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img alt="GitHub" src={gitHubIcon} />
                </motion.a>
                <motion.a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img alt="LinkedIn" src={linkedInIcon} />
                </motion.a>
                <motion.a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img alt="Resume" src={resumeIcon} />
                </motion.a>    
            </div>
        </motion.div>
    );
}

export default Details;