import React, { 
    useState, 
    useRef, 
    useLayoutEffect
} from 'react';
import { 
    motion,
    useScroll,
    useTransform,
    useSpring
} from 'framer-motion';
import arrowIcon from '../../assets/images/arrow_icon.png';

interface Props {
    project: any;
    offset?: number;
}

function Project({ project, offset = 10 }: Props) {
    const ref = useRef<HTMLImageElement>(null);
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const { scrollY } = useScroll();
    const initial = elementTop - clientHeight;
    const final = elementTop + offset;
    const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
    const y = useSpring(yRange, { stiffness: 100, damping: 10 });

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

    return (
        <div className='project-container'>
            <div className='project-image'>
                <div className='project-outline'></div>
                <motion.img
                    alt={project.name}
                    src={project.image}
                    ref={ref as React.RefObject<HTMLImageElement>}
                    style={{ y }}
                >
                </motion.img>
            </div>
            <div className='project-card'>
                <h3>{project.name}</h3>
                <div className='card-container'>
                    <div className='card-description'>{project.description}</div>
                    <div className='break'></div>
                    <div className='card-tools'>{project.tools}</div>
                    <div className='card-links'>
                        <a 
                            href={project.siteLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Live
                            <img alt="Arrow icon" src={arrowIcon} />
                        </a>
                        <a 
                            href={project.gitHubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Code
                            <img alt="Arrow icon" src={arrowIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;