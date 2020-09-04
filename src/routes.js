import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
