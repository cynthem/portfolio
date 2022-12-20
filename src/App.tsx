import React, { useState, useEffect, useRef } from "react";
import LeftPanel from './components/LeftPanel';
import About from './components/about/About';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import './sass/main.scss';

export function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [scrollView, setScrollView] = useState(0);
  const inView = useRef<HTMLDivElement>(null);

  const scrollWatcher = () => {
    console.log('hi');
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
    console.log('success')
  }

  useEffect(() => {
    console.log(inView);
    inView.current?.addEventListener('scroll', scrollWatcher);

    //const element = inView.current;
    //(element as HTMLElement).addEventListener('scroll', scrollWatcher);
   // document.addEventListener('scroll', scrollWatcher);
    //return () => {
     // element &&
     // (element as HTMLElement).removeEventListener('scroll', scrollWatcher);
   // }
  });

  return (
    <div className='app' ref={inView as React.RefObject<HTMLDivElement>}>
        <LeftPanel 
          scrollView={scrollView}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className='pages'>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
      <Footer />
    </div>
  );
}