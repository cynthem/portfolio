import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import arrowIcon from '../../assets/images/arrow_icon.png';

function EmailForm() {
    return (
        <form className='email-form'>
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
        </form>
    );
}

export default EmailForm;