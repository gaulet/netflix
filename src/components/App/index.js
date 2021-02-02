import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { map } from 'ramda';

import routes, { DEFAULT_ROUTE_PATH } from '../../routes';
import NavigationLayout from '../NavigationLayout';


import {useConnect} from './hooks'

const MakeRoutes = () => (
  <Switch>
    {map(
      (route) => (
        <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
      ),
      routes,
    )}
    <Redirect to={DEFAULT_ROUTE_PATH} />
  </Switch>
);

const App = () => {
  const { setPicture } = useConnect()   
  
  setPicture()
  
  return (
    <NavigationLayout>
      <MakeRoutes />
    </NavigationLayout>
  )
};

export default App;
