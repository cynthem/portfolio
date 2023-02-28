import React, { useEffect, Dispatch, SetStateAction } from 'react';
import NavItem from './NavItem';

interface Props {
    scrollView: number;
    currentPage: string;
    setCurrentPage: Dispatch<SetStateAction<string>>;
    navItems: {
        about: number,
        skills: number,
        projects: number,
        contact: number
    };
}

function LeftPanel({ scrollView, currentPage, setCurrentPage, navItems }: Props) {

    useEffect(() => {
        if (scrollView > navItems["contact"]) {
            setCurrentPage("contact");
        } else if (scrollView > navItems["projects"]) {
            setCurrentPage("projects");
        } else if (scrollView > navItems["skills"]) {
            setCurrentPage("skills");
        } else if (scrollView > navItems["about"]) {
            setCurrentPage("about");
        } else {
            setCurrentPage("home");
        }
    }, [scrollView]);

    const navList = Object.keys(navItems).map((e, i) => 
        <NavItem 
            navName={e} 
            key={`navitem_${i}`} 
            active={e === currentPage ? true : false} 
            currentPage={currentPage} 
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