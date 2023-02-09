import React, { useState, useEffect } from 'react';

interface Props {
    navName: string;
}

function NavItem({ navName }: Props) {
    return (
        <li>
            <a href={`#${navName}`}
                className={`${navName}-nav`}
                aria-Label={`Scroll to ${navName}`}
            >
                {navName}
            </a>
        </li>
    );
}

export default NavItem;