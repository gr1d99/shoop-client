import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

import ClientLayout from './client';
import { AppLayoutContainerBase } from '../utils/themes';
import { useLayout } from '../contexts/layout-provider';
import AdminLayout from './admin';

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props): JSX.Element => {
  const { isClient, isAdmin } = useLayout();
  return (
    <div className={AppLayoutContainerBase}>
      {isClient && <ClientLayout>{children}</ClientLayout>}
      {isAdmin && <AdminLayout>{children}</AdminLayout>}
    </div>
  );
};

AppLayout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};

export default AppLayout;
