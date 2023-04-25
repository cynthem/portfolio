import React, { useState, useEffect, useRef } from "react";
import LeftPanel from './navigation/LeftPanel';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import '../sass/main';

const navItems = {
    about: 0,
    skills: 0,
    projects: 0,
    contact: 0
}

export function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const [scrollView, setScrollView] = useState(0);
    const inView = useRef<HTMLDivElement>(null);

    const scrollWatcher = () => {
        if (!inView.current) return;
        const scrollLocation = (inView.current as HTMLElement).scrollTop;
        const totalHeight = (inView.current as HTMLElement).scrollHeight - (inView.current as HTMLElement).clientHeight;
        if (scrollLocation === 0 ) return setScrollView(0);
        if (scrollLocation > totalHeight) return setScrollView(100);
        setScrollView((scrollLocation / totalHeight) * 100);
    }
    
    useEffect(() => {
        inView.current?.addEventListener('scroll', scrollWatcher);
        return () => {
            inView.current &&
            inView.current?.removeEventListener('scroll', scrollWatcher);
        }
    });

    useEffect(() => {
        for (const key in navItems) {
            const componentTop = document.getElementById(key)?.getBoundingClientRect().top!;
            const appHeight = (inView.current as HTMLElement).scrollHeight;
            navItems[key as keyof typeof navItems] = (componentTop / appHeight) * 100;
        }
    }, []);

    return (
        <div className='app' ref={inView as React.RefObject<HTMLDivElement>}>
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