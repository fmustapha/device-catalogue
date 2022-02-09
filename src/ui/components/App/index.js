import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../Home';
import Watches from '../Watches';
import NotFound from '../NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route path="/watches"><Watches /></Route>
      <Route path="/notFound"><NotFound /></Route>
      <Route path="/"><Home /></Route>
      <Redirect to="notFound" />
    </Switch>
  </Router>
);

export default App;
