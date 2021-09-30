import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Canvas from "../Views/Canvas/Index.jsx";

function Router() {
  return (
    <Fragment>
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <Route exact path="/" component={Canvas} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default Router;
