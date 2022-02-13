import {Route, Switch} from "react-router-dom";
import Home from "../pages/home";
import React from "react";

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Home} />
        </Switch>
    )
}

export default Routes