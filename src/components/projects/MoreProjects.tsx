import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import otherProjects from '../../assets/images/project-imgs/otherProj.jpg';
import arrowIcon from '../../assets/images/icon_arrow_orange.png';

function MoreProjects() {
    const ref = useRef<HTMLDivElement>();

    const [scrollStart, setScrollStart] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(0);

    const { scrollY, scrollYProgress } = useScroll();

    const scale = useTransform(scrollYProgress, [scrollStart!, scrollEnd!], [0.5, 1]);

    useLayoutEffect(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offsetStart = rect.top + scrollTop;
        const offsetTop = rect.top + scrollTop - window.innerHeight
        const offsetEnd = (offsetTop + rect.height);
        const elementStart = offsetStart / document.body.clientHeight;
        const elementEnd = offsetEnd / document.body.clientHeight;

        setScrollStart(elementStart);
        setScrollEnd(elementEnd);
    });

    return (
        <div className='more-projects' ref={ref as React.RefObject<HTMLDivElement>}>
            <div className='more-projects-background'>
                <motion.img 
                    alt='More projects' 
                    src={otherProjects}
                    style={{ scale }}
                >
                </motion.img>
            </div>
            <motion.div 
                className='more-projects-link'
                whileHover={{
                    scale: 1.1, 
                    transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
            >
                <h3>More projects</h3>
                <img alt="Arrow icon" src={arrowIcon} />
            </motion.div>
        </div>
    )
}

export default MoreProjects;