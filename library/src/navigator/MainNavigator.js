import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Welcome from "../pages/Welcome";

const MainNavigator = () => {
  return (
    <Switch>
      
      <Route path='/' component={Welcome} exact />

      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  );
};

export default MainNavigator;
