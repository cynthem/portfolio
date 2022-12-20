import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { motion } from "framer-motion"

interface Props {
    scrollView: number;
    currentPage: string;
    setCurrentPage: Dispatch<SetStateAction<string>>;
}

function LeftPanel({ scrollView, currentPage, setCurrentPage }: Props) {
    useEffect(() => {
        if (scrollView > 10) {
            setCurrentPage("about");
            console.log('about time')
        } else if (scrollView > 20) {
            setCurrentPage("skills");
        } else if (scrollView > 30) {
            setCurrentPage("projects");
        } else if (scrollView > 40) {
            setCurrentPage("contact");
        } else {
            setCurrentPage("home");
        }
    }, [scrollView]);

    return (
        <div className='left-panel'>
            <ul className='link-list'>
                <motion.li>About
                    <motion.div
                        className={`${currentPage === "about" && "about-nav"}`}
                    >
                    </motion.div>
                </motion.li>
        
                <motion.li
                >
                    Skills
                    <motion.div
                        
                    >
                    </motion.div>
                </motion.li>

                <motion.li
                >
                    Projects
                    <motion.div
                        
                    >
                    </motion.div>
                </motion.li>

                <motion.li
                >
                    Contact
                    <motion.div
                        
                    >
                    </motion.div>
                </motion.li>
            </ul>
        </div>
    );
}

export default LeftPanel;