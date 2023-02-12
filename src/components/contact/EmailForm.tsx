import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';
import arrowIcon from '../../assets/images/arrow_icon.png';

function EmailForm() {
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
        <motion.form 
            className='email-form'
            ref={ref}
            animate={animation}
            initial={{opacity: 0}}
            variants={animateDetails}
        >
            <div className='form-inputs'>
                <input 
                    className='name-input' 
                    type='text' 
                    name='user_name' 
                    placeholder='Name' 
                    aria-label='Enter your name'
                    required
                />
                <input 
                    className='email-input' 
                    type='text' 
                    name='user_email' 
                    placeholder='Email'
                    aria-label='Enter your email address'
                    required
                />
                <textarea 
                    className='message-input' 
                    name='message' 
                    placeholder='Message' 
                    aria-label='Enter your message'
                    required
                />
            </div>
            <button 
                className='send-input'
                type='submit'
                value='Send'
                aria-label='Send email'
            >
                Send
                <img 
                    alt='Send' 
                    src={arrowIcon} 
                />
            </button>
        </motion.form>
    );
}

export default EmailForm;