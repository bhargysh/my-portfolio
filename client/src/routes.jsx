import React from "react";
import { Route, Switch } from "react-router-dom";

import { Me } from "./me.jsx";
import { Projects } from "./projects.jsx";
import { Contact } from "./contact.jsx";

export const Routes = () => {
  return (
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
  );
};
