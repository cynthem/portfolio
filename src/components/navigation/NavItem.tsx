import React, { useState, useEffect } from 'react';

interface Props {
    navName: string;
    active: boolean;
    currentPage: string;
}

function NavItem({ navName, active, currentPage }: Props) {
    const [anchorTarget, setAnchorTarget] = useState(null);

    return (
        <li>
            <a href={`#`}></a>
        </li>
    );
}

export default NavItem;