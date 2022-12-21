import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { motion } from "framer-motion"

interface Props {
    scrollView: number;
    currentPage: string;
    setCurrentPage: Dispatch<SetStateAction<string>>;
}

function LeftPanel({ scrollView, currentPage, setCurrentPage }: Props) {

    useEffect(() => {
        if (scrollView > 93) {
            setCurrentPage("contact");
        } else if (scrollView > 35) {
            setCurrentPage("projects");
        } else if (scrollView > 20) {
            setCurrentPage("skills");
        } else if (scrollView > 4) {
            setCurrentPage("about");
        } else {
            setCurrentPage("home");
        }
    }, [scrollView]);

    return (
        <div className='left-panel'>
            <ul className='link-list'>
                <li><a href="#about" className={`underline ${currentPage === "about" && "about-nav"}`}>About</a></li>
                <li><a href="#skills" className={`underline ${currentPage === "skills" && "skills-nav"}`}>Skills</a></li>
                <li><a href="#projects" className={`underline ${currentPage === "projects" && "projects-nav"}`}>Projects</a></li>
                <li><a href="#contact" className={`underline ${currentPage === "contact" && "contact-nav"}`}>Contact</a></li>
            </ul>
        </div>
    );
}

export default LeftPanel;