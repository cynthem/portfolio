import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { motion } from "framer-motion";
import NavItem from './NavItem';

interface Props {
    scrollView: number;
    currentPage: string;
    setCurrentPage: Dispatch<SetStateAction<string>>;
}

function LeftPanel({ scrollView, currentPage, setCurrentPage }: Props) {

    useEffect(() => {
        if (scrollView > 93) {
            setCurrentPage("contact");
        } else if (scrollView > 35) {
            setCurrentPage("projects");
        } else if (scrollView > 20) {
            setCurrentPage("skills");
        } else if (scrollView > 4) {
            setCurrentPage("about");
        } else {
            setCurrentPage("home");
        }
    }, [scrollView]);

    return (
        <div className='left-panel'>
            <ul className='link-list'>
            </ul>
        </div>
    );
}

export default LeftPanel;