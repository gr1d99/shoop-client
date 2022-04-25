const Root = '/';
const AdminRoot = '/admin';

export const routePaths = {
  productDetail: '/products/:slug'
};

export const routeBuilder = {
  root: Root,
  products: '/products',
  productDetail: (slug: string): string => `${routeBuilder.products}/${slug}`,
  admin: {
    root: AdminRoot,
    dashboard: `${AdminRoot}/dashboard`,
    listProducts: AdminRoot + '/products'
  }
};
