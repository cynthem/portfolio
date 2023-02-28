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
    const inView = useRef<HTMLDivElement>(null);
    
    const navItems = {
        about: 0,
        skills: 0,
        projects: 0,
        contact: 0
    }

    const scrollWatcher = () => {
        if (!inView.current) return;
        const scrollLocation = (inView.current as HTMLElement).scrollTop;
        //const totalHeight = (inView.current as HTMLElement).scrollHeight - (inView.current as HTMLElement).clientHeight;
        if (scrollLocation === 0 ) return setScrollView(0);
        //if (scrollLocation > totalHeight) return setScrollView(100);
        setScrollView(scrollLocation);
        console.log(scrollView)
      }
    
      useEffect(() => {
        inView.current?.addEventListener('scroll', scrollWatcher);
        return () => {
            inView.current &&
            inView.current?.removeEventListener('scroll', scrollWatcher);
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
        //console.log(navItems)
    }

    return (
        <div className="app" ref={inView as React.RefObject<HTMLDivElement>}>
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