import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';

export default (
  <Route>
    <Route path="/" component={App}>
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
