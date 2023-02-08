import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import arrowIcon from '../../assets/images/arrow_icon.png';

function EmailForm() {
    const form = useRef<HTMLFormElement>();

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const sendBtn = document.querySelector('.send-input');
        sendBtn!.textContent= 'Sending...';
        emailjs
            .sendForm(
                'service_a67k0id',
                'template_gloqn3c',
                form.current!,
                'd-khxRMXEB7gBIMrd'
            )
            .then(
                (result) => {
                    sendBtn!.textContent = 'Thanks for the message!';
                },
                (error) => {
                    sendBtn!.textContent = 'There was an error sending your message. Please try again.';
                }
            );
    }

    const animateBtn = {
        rest: {
            scale: 1,
            color: 'black',
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.2,
            color: '#ffa600', 
            transition: { duration: 0.5 }
        },
        tap: {
            scale: 0.9
        }
    }

    const animateIcon = {
        rest: {
            rotate: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            rotate: 45,
            transition: { duration: 0.5 }
        }
    }

    return (
        <form 
            className='email-form'
            ref={form as React.RefObject<HTMLFormElement>}
            onSubmit={sendEmail}
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
            <motion.button 
                className='send-input'
                type='submit'
                value='Send'
                aria-label='Send email'
                variants={animateBtn}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                animate="rest"
            >
                Send
                <motion.img 
                    alt='Send' 
                    src={arrowIcon} 
                    variants={animateIcon}
                />
            </motion.button>
        </form>
    )
}

export default EmailForm;