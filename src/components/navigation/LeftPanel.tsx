import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';

interface Props {
    navItems: object;
    activeNav: string;
}

function LeftPanel({ navItems, activeNav }: Props) {

    const navList = Object.keys(navItems).map((e, i) => 
        <NavItem 
            navName={e} 
            key={`navitem_${i}`} 
            active={e === activeNav ? true : false} 
            currentPage={activeNav} 
        />
    );

    return (
        <div className='left-panel'>
            <ul className='link-list'>
                {navList}
            </ul>
        </div>
    );
}

export default LeftPanel;