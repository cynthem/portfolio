import React, { useRef } from 'react';
import arrowIcon from '../../assets/images/arrow_icon.png';

function EmailForm() {
    return (
        <form className='email-form'>
            <div className='form-inputs'>
                <input className='name-input' type='text' placeholder='Name'/>
                <input className='email-input' type='text' placeholder='Email'/>
                <textarea className='message-input' placeholder='Message'></textarea>
            </div>
            <button className='send-input'>
                Send
                <img alt='Send' src={arrowIcon} />
            </button>
        </form>
    )
}

export default EmailForm;