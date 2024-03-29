import React from "react";
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/activity/PageNotFound";
import LandingPage from "../components/landing/LandingPage";
import BootstrapPage from "../components/bootstrap/BootstrapPage";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PublicRoute path="/bootstrap" component={BootstrapPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
