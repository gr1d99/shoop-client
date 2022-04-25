import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import { hydrate } from 'react-dom';

import TagManager from 'react-gtm-module';

import './assets/css/tailwind.output.css';

const tagManagerArgs = {
  gtmId: process.env.RAZZLE_APP_GTM_KEY
};

TagManager.initialize(tagManagerArgs);

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
