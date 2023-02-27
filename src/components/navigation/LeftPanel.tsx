import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';

const navItems: { [key: string]: number | null } = {
    about: 4,
    skills: null, 
    projects: null, 
    contact: null
}

function LeftPanel() {
    const [activeNav, setActiveNav] = useState('Top');

    useEffect(() => {
        const observer = new MutationObserver(getAnchorPoints);
        observer.observe(document.getElementById('app')!, {
            childList: true,
            subtree: true
        });
        window.addEventListener('scroll', handleScroll);
    }, []);

    const getAnchorPoints = () => {
        const currentScroll = window.scrollY - 100;
        const viewportHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );
        for (const key in navItems) {
            navItems[key] = document.getElementById(key)?.getBoundingClientRect().top! + currentScroll;
        }
        const bottom = document.body.offsetHeight;
        handleScroll();
    }

    const handleScroll = () => {
        const currentPosition = window.scrollY;
        let currentSection = null;
        for (const section in navItems) {
            currentSection = navItems[section]! <= currentPosition ? section : currentSection;
            if (currentSection !== section) {
                break;
            }
        }
        if (currentSection !== activeNav) {
            setActiveNav(currentSection!);
        }
    }

    const navList = Object.keys(navItems).map((e, i) => 
        <NavItem 
            navName={e} 
            key={`navitem_${i}`} 
            active={e === activeNav ? true : false} 
            currentPage={activeNav} 
        />
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