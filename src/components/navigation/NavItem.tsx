import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Props {
    navName: string;
    active: boolean;
    currentPage: string;
}

function NavItem({ navName, active, currentPage }: Props) {
    const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(navName));
    }, [navName]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        anchorTarget?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const capitalize = (navString: String) => {
        return navString.charAt(0).toUpperCase() + navString.slice(1);
    }

    return (
        <motion.li
            whileTap={{ scale: 0.9 }}
        >
            <motion.a 
                href={`#${navName}`}
                className={`underline ${active} ${currentPage === `${navName}` && `${navName}-nav`}`}
                aria-Label={`Scroll to ${navName}`}
                onClick={(e) => handleClick(e)}
                whileHover={{ color: '#ffa600' }}
            >
                {capitalize(navName)}
            </motion.a>
        </motion.li>
    );
}

export default NavItem;