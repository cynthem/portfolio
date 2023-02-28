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
        console.log(navItems);
        /*const currentPosition = window.scrollY;
        let currentSection = "";
        for (const section in navItems) {
            currentSection = navItems[section]! <= currentPosition ? section : currentSection;
            if (currentSection !== section) break;
        }
        if (currentSection !== activeNav) {
            setActiveNav(currentSection!);
        }*/
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