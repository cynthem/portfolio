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
                whileHover={{
                    scale: 1.2,
                    color: 'hsl(39, 100, 50)', 
                    transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
            >
                Send
                <img alt='Send' src={arrowIcon} />
            </motion.button>
        </form>
    )
}

export default EmailForm;