import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { ROUTES } from '../../routes/routes';
import './App.css';
import 'normalize.css';
import ScrollToTop from '../../containers/ScrollToTop';

export default class App extends Component {
  render() {
    return (
      <Router>
        < >
          <Header/>
          <ScrollToTop>
            <Switch>
              <Route exact path={ROUTES.HOME.path}
                component={ROUTES.HOME.Component}
              />
              <Route exact path={ROUTES.WORK.path}
                component={ROUTES.WORK.Component}
              />
              <Route exact path={ROUTES.PROJECTS.path}
                component={ROUTES.PROJECTS.Component}
              />
              <Route exact path={ROUTES.PROJECTS_HOMEBREWDOG.path}
                component={ROUTES.PROJECTS_HOMEBREWDOG.Component}
              />
              <Route exact path={ROUTES.PROJECTS_MEME_GENERATOR.path}
                component={ROUTES.PROJECTS_MEME_GENERATOR.Component}
              />
              <Route exact path={ROUTES.PROJECTS_SIM_ALCHEMY.path}
                component={ROUTES.PROJECTS_SIM_ALCHEMY.Component}
              />
              <Redirect to={ROUTES.HOME.path} />
            </Switch>
          </ScrollToTop>
          <Footer/>
        </>
      </Router>
    );
  }
}
