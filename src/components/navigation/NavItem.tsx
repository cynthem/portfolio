import React, { useState, useEffect } from 'react';

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
        <li>
            <a href={`#${navName}`}
                onClick={(e) => handleClick(e)}
                className={`underline ${active} ${currentPage === `${navName}` && `${navName}-nav`}`}
                aria-Label={`Scroll to ${navName}`}
            >
                {capitalize(navName)}
            </a>
        </li>
    );
}

export default NavItem;