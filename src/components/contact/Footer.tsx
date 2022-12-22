import React from 'react';
import heartIcon from '../../assets/images/heart_icon.svg';

function Footer() {
    return (
        <div className='footer'>
            <p>
                Made with 
                <img 
                    alt='love'
                    src={heartIcon}
                /> 
                by 
                <a 
                    href='https://github.com/doozles411' 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    CMP
                </a>
            </p>
        </div>
    );
}

export default Footer;