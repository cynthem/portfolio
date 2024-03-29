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

    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        anchorTarget?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const capitalize = (navString: String) => {
        return navString.charAt(0).toUpperCase() + navString.slice(1);
    }

    return (
        <li className='link-item'>
            <a 
                href={`#${navName}`}
                className={`underline ${active} ${currentPage === `${navName}` && `${navName}-nav`}`}
                aria-Label={`Scroll to ${navName}`}
                onClick={(e) => onClick(e)}
            >
                {capitalize(navName)}
            </a>
        </li>
    );
}

export default NavItem;