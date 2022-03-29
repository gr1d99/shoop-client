import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routesBuilder } from '../utils/routes';
import Dashboard from '../pages/admin/dashboard';
const Home = loadable(() => import('../pages/home'));
const Products = loadable(() => import('../pages/products'));

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={routesBuilder.root} component={Home} />
      <Route path={routesBuilder.products} component={Products} />
      <Route path={routesBuilder.admin.root} exact={true}>
        <Redirect to={routesBuilder.admin.dashboard} />
      </Route>
      <Route path={routesBuilder.admin.dashboard} component={Dashboard} />
    </Switch>
  );
};

export default Routes;
