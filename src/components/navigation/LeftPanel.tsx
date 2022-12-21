import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { motion } from "framer-motion";
import NavItem from './NavItem';

interface Props {
    scrollView: number;
    currentPage: string;
    setCurrentPage: Dispatch<SetStateAction<string>>;
}

const navItems = {
    Top: 0,
    AboutSection: null,
    SkillsSection: null, 
    ProjectsSection: null, 
    ContactSection: null
}

function LeftPanel({ scrollView, currentPage, setCurrentPage }: Props) {
    const [activeNav, setActiveNav] = useState('Top');

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

    useEffect(() => {
        const observer = new MutationObserver(getAnchorPoints);
        observer.observe(document.getElementById('root')!, {
            childList: true,
            subtree: true
        });
        window.addEventListener('scroll', handleScroll);
    }, []);

    const getAnchorPoints = () => {}

    const handleScroll = () => {}

    const navList = Object.keys(sections).map((e, i) => 
        <NavItem navName={e} key={`navitem_${i}`} active={e === activeNav ? true : false} currentPage={currentPage} />
    );

    return (
        <div className='left-panel'>
            <ul className='link-list'>
                {navList}
            </ul>
        </div>
    );
}

export default LeftPanel;