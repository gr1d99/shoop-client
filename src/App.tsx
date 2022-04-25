import * as React from 'react';

import Routes from './routes/routes';
import AppLayout from './layout/app';
import LayoutProvider from './contexts/layout-provider';

import './assets/css/tailwind.output.css';

const App = () => (
  <LayoutProvider>
    <AppLayout>
      <Routes />
    </AppLayout>
  </LayoutProvider>
);

export default App;
