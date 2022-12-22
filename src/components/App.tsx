import React, { useState, useEffect, useRef } from "react";
import LeftPanel from './navigation/LeftPanel';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './contact/Footer';
import '../sass/main.scss';

export function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [scrollView, setScrollView] = useState(0);
  const inView = useRef<HTMLDivElement>(null);

  const scrollWatcher = () => {
    if (!inView.current) return;
    
    const element = inView.current;
    const scrollLocation = (element as HTMLElement).scrollTop;
    const totalHeight = (element as HTMLElement).scrollHeight - (element as HTMLElement).clientHeight;

    if (scrollLocation === 0 ) {
      return setScrollView(0);
    }

    if (scrollLocation > totalHeight) {
      return setScrollView(100);
    }

    setScrollView((scrollLocation / totalHeight) * 100);
    console.log(scrollView);
  }

  useEffect(() => {
    inView.current?.addEventListener('scroll', scrollWatcher);

    return () => {
      inView.current &&
      inView.current?.removeEventListener('scroll', scrollWatcher);
    }
  });

  return (
    <div className='app' ref={inView as React.RefObject<HTMLDivElement>}>
        <LeftPanel 
          scrollView={scrollView}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className='pages'>
            <About 
              scrollView={scrollView}
            />
            <Skills 
              scrollView={scrollView}
            />
            <Projects 
              scrollView={scrollView}
            />
            <Contact />
        </div>
      <Footer />
    </div>
  );
}