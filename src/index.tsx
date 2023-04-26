import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './sass/main.scss';

const rootNode = document.getElementById('app');

if (rootNode) {
  createRoot(rootNode).render(<App />);
}