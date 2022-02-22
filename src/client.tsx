import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import { hydrate } from 'react-dom';
import './assets/css/tailwind.output.css';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
