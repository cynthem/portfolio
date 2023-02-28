import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import NavItem from './NavItem';

interface Props {
    navItems: {
        about: number,
        skills: number,
        projects: number,
        contact: number
    };
    activeNav: string;
    setActiveNav: Dispatch<SetStateAction<string>>;
}

function LeftPanel({ navItems, activeNav, setActiveNav }: Props) {

    useEffect(() => {
        const currentPosition = window.scrollY;
        let currentSection = "";
        for (const key in navItems) {
            currentSection = navItems[key as keyof typeof navItems]! <= currentPosition ? key : currentSection;
            if (currentSection !== key) break;
        }
        if (currentSection !== activeNav) {
            setActiveNav(currentSection!);
        }
    });

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