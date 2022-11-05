import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import Main from './components/Main';
import Footer from './components/Footer';
import './sass/main.scss';

export const App: React.FC = () => {
  const [inView, setInView] = useState<Number | undefined>(0);

  function handleView(view: Number) {
    setInView(view);
  }

  return (
    <div className='app'>
      <LeftPanel 
        //inView={inView}
        //handleView={handleView}
      />
      <Main />
      <Footer />
    </div>
  );
}