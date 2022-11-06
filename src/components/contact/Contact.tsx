import React from 'react';
import Details from './Details';
import EmailForm from './EmailForm';

function Contact() {
    return (
        <div className='contact'>
            <div className='contact-header' id='contact'>
                <p className='number'>04.</p>
                <h2>Contact</h2>
            </div>
            <div className='contact-details'>
                <Details />
                <EmailForm />
            </div>
        </div>
    );
}

export default Contact;