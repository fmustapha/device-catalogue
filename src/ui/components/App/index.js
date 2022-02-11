import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Home";
import Watches from "../Watches";
import IPhones from "../IPhones/index";
import NotFound from "../NotFound";

import CSSReset from "@tds/core-css-reset";

const App = () => (
  <Router>
    <Switch>
      <Route path="/watches">
        <Watches />
      </Route>
      <Route path="/iphones">
        <IPhones />
      </Route>
      <Route path="/notFound">
        <NotFound />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Redirect to="notFound" />
    </Switch>
  </Router>
);

export default App;
