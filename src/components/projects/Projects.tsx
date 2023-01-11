import React, { 
    useState, 
    useEffect, 
    useRef, 
    useLayoutEffect, 
    ReactNode 
} from 'react';
import { 
    motion,
    useScroll,
    useTransform,
    useSpring
} from 'framer-motion';
import uniqid from 'uniqid';
import Project from './Project';
import MoreProjects from './MoreProjects';
import projectPreviews from '../../util/projectPreviews';

interface Props {
    scrollView: number;
    children: ReactNode;
    offset?: number;
}

function Projects({ scrollView, children, offset = 50 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const { scrollY } = useScroll();
    const initial = elementTop - clientHeight;
    const final = elementTop + offset;
    const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
    const y = useSpring(yRange, { stiffness: 400, damping: 90 });

    useLayoutEffect(() => {
        const element = ref.current;
        const onResize = () => {
            if (!element) return;
            setElementTop(
                element.getBoundingClientRect().top + window.scrollY || window.pageYOffset
            );
            setClientHeight(window.innerHeight);
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [ref]);

    useEffect(() => {
        if (scrollView < 35) {
            setInView(false);
        } else if (scrollView >= 35 && scrollView <= 95) {
            setInView(true);
        } else if (scrollView > 95) {
            setInView(false);
        }
    }, [scrollView]);

    const projectsInView = <motion.div 
            className='projects-container'
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='projects-header'>
                <p className='number'>03.</p>
                <h2>Projects</h2>
            </div>
            <motion.div 
                className='projects-list'
                ref={ref as React.RefObject<HTMLDivElement>}
                style={{ y }}
            >
                {projectPreviews.map((project) => {
                    return (
                        <Project 
                            key={uniqid()} 
                            project={project}
                        />
                    )
                })}
            </motion.div>
            <MoreProjects />
        </motion.div>
    
    const projectsOutView = <motion.div 
            className='projects-container'
            animate={{ scale: 0.6 }}
            transition={{ duration: 0.8 }}
        >
            <div className='projects-header'>
                <p className='number'>03.</p>
                <h2>Projects</h2>
            </div>
            <motion.div 
                className='projects-list'
                ref={ref as React.RefObject<HTMLDivElement>}
                style={{ y }}
            >
                {projectPreviews.map((project) => {
                    return (
                        <Project 
                            key={uniqid()} 
                            project={project}
                        />
                    )
                })}
            </motion.div>
            <MoreProjects />
        </motion.div>

    return (
        <div className='projects' id='projects'>
            {inView ? projectsInView : projectsOutView}
        </div>
    )
}

export default Projects;