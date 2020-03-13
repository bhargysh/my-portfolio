import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Me } from "./me.jsx";
import { Projects } from "./projects.jsx";
import { Contact } from "./contact.jsx";
import { Navbar } from "./navbar.jsx";

export const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Me />
        </Route>
      </Switch>
    </Router>
  );
};
