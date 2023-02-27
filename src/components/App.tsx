import React, { useState, useEffect, useRef } from "react";
import LeftPanel from './navigation/LeftPanel';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import '../sass/main.scss';

const navItems: { [key: string]: number | null } = {
  about: null,
  skills: null, 
  projects: null, 
  contact: null
}

export function App() {
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
        /*const viewportHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );*/
        for (const key in navItems) {
            navItems[key] = document.getElementById(key)?.getBoundingClientRect().top! + currentScroll;
        }
        //const bottom = document.body.offsetHeight;
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

    return (
        <div className="app">
            <LeftPanel 
                navItems={navItems}
                activeNav={activeNav}
            />
            <div className="pages">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}