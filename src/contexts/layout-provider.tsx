import React from 'react';
import { useLocation } from 'react-router-dom';

interface ILayout {
  isClient: true | false;
  isAdmin: true | false;
}

const LayoutContext = React.createContext({} as ILayout);

export const useLayout = (): ILayout => {
  return React.useContext(LayoutContext);
};

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isAdmin = /\/admin/.test(pathname);
  const isClient = !isAdmin;

  return <LayoutContext.Provider value={{ isClient, isAdmin }}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
