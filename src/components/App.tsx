import React, { useState, useEffect, useRef } from "react";
import LeftPanel from './navigation/LeftPanel';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import '../sass/main.scss';

export function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const [scrollView, setScrollView] = useState(0);
    
    const navItems = {
        about: 0,
        skills: 0,
        projects: 0,
        contact: 0
    }

    const scrollLocation = () => {
        setScrollView(window.scrollY);
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', scrollLocation);
        }
        watchScroll();
        return () => {
            window.removeEventListener('scroll', scrollLocation);
        }
    });

    useEffect(() => {
        const observer = new MutationObserver(getAnchorPoints);
        observer.observe(document.getElementById('app')!, {
            childList: true,
            subtree: true
        });
    }, []);

    const getAnchorPoints = () => {
        const currentScroll = window.scrollY;
        for (const key in navItems) {
            navItems[key as keyof typeof navItems] = document.getElementById(key)?.getBoundingClientRect().top! + currentScroll;
        }
    }

    return (
        <div className="app">
            <LeftPanel 
                scrollView={scrollView}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                navItems={navItems}
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