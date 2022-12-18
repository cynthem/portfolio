import React from 'react';
import views from '../util/pageViews';
import { motion } from "framer-motion"

function LeftPanel() {
    return (
        <motion.div>
            <div className='left-panel'>
                <ul className='link-list'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </motion.div>
    );
}

export default LeftPanel;