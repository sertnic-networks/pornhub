import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/variables.css';
import './assets/tailwind.css';
import './assets/global.css';
import App from './App';
import buildPWA from './react-pwa-lib';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.querySelector('phd-root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Build and Test PWA
buildPWA();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
