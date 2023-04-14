import React from 'react';
import { motion } from 'framer-motion';
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
                <motion.a 
                    href='https://github.com/cynthem' 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{
                        color: '#fefae9', 
                        transition: { duration: 0.5 }
                    }}
                    whileTap={{ color: "red" }}
                >
                    CMP
                </motion.a>
            </p>
        </div>
    );
}

export default Footer;