import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import { routesBuilder } from '../utils/routes';
const Home = loadable(() => import('../pages/home'));
const Products = loadable(() => import('../pages/products'));

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={routesBuilder.root} component={Home} />
      <Route path={routesBuilder.products} component={Products} />
    </Switch>
  );
};

export default Routes;
