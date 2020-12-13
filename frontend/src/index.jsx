import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import { BrowserRouter } from 'react-router-dom';

//base react component
import Base from './Base';

//stylesheet import
import './scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <Base />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// for creating a progressive web application (PWA) 😋😋😋😋
if ('serviceWorker' in navigator) {
 window.addEventListener('load', () => {
   navigator.serviceWorker.register('/service-worker.js').then(registration => {
     console.log('Service Worker registered: ', registration);
   }).catch(registrationError => {
     console.log('Service Worker registration failed: ', registrationError);
   });
 });
}