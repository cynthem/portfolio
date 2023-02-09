import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Details from './Details';
import EmailForm from './EmailForm';
import Footer from './Footer';

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
            <Footer />
        </div>
    );
}

export default Contact;