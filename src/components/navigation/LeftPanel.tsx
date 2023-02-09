import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import NavItem from './NavItem';

function LeftPanel() {
    const navItems: { [key: string]: number | null } = {
        about: 4,
        skills: null, 
        projects: null, 
        contact: null
    }

    const navList = Object.keys(navItems).map((e, i) => 
        <NavItem 
            navName={e}
            key={`navitem_${i}`}
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