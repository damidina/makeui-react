import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/activity/PageNotFound';
import LandingPage from '../components/landing/LandingPage';
import PublicRoute from './PublicRoute';
import Controller from '../components/customize/Controller';

import Colors from '../components/customize/Colors';
import Corners from '../components/customize/Corners';
import Themes from '../components/customize/Themes';


export const history = createHistory()

const titles = ["Theme", "Color", "Corner Radius"]
const ControllerPage = (props) => (<Controller {...props} titles={titles} views={[Themes, Colors, Corners]} />);



const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LandingPage} exact={true} />
                <PublicRoute path="/customize" component={ControllerPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;