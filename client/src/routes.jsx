import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Me from "./me.jsx";
import Projects from "./projects.jsx";
import Navbar from "./navbar.jsx";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Me />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
