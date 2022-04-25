import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routePaths, routeBuilder } from '../utils/routes';
import Dashboard from '../pages/admin/dashboard';
import ProductDetail from '../pages/product';
const Home = loadable(() => import('../pages/home'));
const Products = loadable(() => import('../pages/products'));

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={routeBuilder.root} component={Home} />
      <Route path={routePaths.productDetail} component={ProductDetail} />
      <Route path={routeBuilder.products} component={Products} />
      <Route path={routeBuilder.admin.root} exact={true}>
        <Redirect to={routeBuilder.admin.dashboard} />
      </Route>
      <Route path={routeBuilder.admin.dashboard} component={Dashboard} />
    </Switch>
  );
};

export default Routes;
