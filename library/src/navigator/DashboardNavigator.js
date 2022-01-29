import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import HomePage from "../pages/Main";


const DashboardNavigator = (props) => {
  const { path } = useRouteMatch();
  console.log(path)
  return (
    <Box onClick={props.toggle}>
      <Route path={path} exact>
        <HomePage exact />
      </Route>
        <Route path={`${path}categories`} component={<>Empty</>} exact />
    </Box>
  );
};

export default DashboardNavigator;
