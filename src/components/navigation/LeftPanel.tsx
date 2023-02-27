import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';

function LeftPanel() {

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