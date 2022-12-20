import React, { useEffect, Dispatch, SetStateAction } from 'react';
import views from '../util/pageViews';
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
                <li className={`underline ${currentPage === "home"}`}>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default LeftPanel;