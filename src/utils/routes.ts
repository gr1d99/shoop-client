const Root = '/';
const AdminRoot = '/admin';

export const routesBuilder = {
  root: Root,
  products: '/products',
  admin: {
    root: AdminRoot,
    dashboard: `${AdminRoot}/dashboard`
  }
};
