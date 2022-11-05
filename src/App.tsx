import React, { useState } from 'react';
import './sass/main.scss';

export const App: React.FC = () => {
  const [inView, setInView] = useState(0);

  function handleView(view) {
    setInView(view);
  }

  return (
    <div className='app'>

    </div>
  );
}