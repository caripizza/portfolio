import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
const Header = React.lazy(() => import('../header/Header'));
const Footer = React.lazy(() => import('../footer/Footer'));
const ScrollToTop = React.lazy(() => import('../../containers/ScrollToTop'));
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path={ROUTES.HOME.path}
              component={ROUTES.HOME.Component}
            />
            <Route
              exact
              path={ROUTES.PROJECTS.path}
              component={ROUTES.PROJECTS.Component}
            />
            <Route
              exact
              path={ROUTES.PROJECTS_HOMEBREWDOG.path}
              component={ROUTES.PROJECTS_HOMEBREWDOG.Component}
            />
            <Route
              exact
              path={ROUTES.PROJECTS_MEME_GENERATOR.path}
              component={ROUTES.PROJECTS_MEME_GENERATOR.Component}
            />
            <Route
              exact
              path={ROUTES.PROJECTS_SIM_ALCHEMY.path}
              component={ROUTES.PROJECTS_SIM_ALCHEMY.Component}
            />
            <Route
              exact
              path={ROUTES.PROJECTS_REDUX_BLOG.path}
              component={ROUTES.PROJECTS_REDUX_BLOG.Component}
            />
            <Route
              exact
              path={ROUTES.PROJECTS_POKEDEX.path}
              component={ROUTES.PROJECTS_POKEDEX.Component}
            />
            <Route
              exact
              path={ROUTES.PROJECTS_ASYNC_RM.path}
              component={ROUTES.PROJECTS_ASYNC_RM.Component}
            />
            <Route
              exact
              path={ROUTES.PROJECTS_Q_BOT.path}
              component={ROUTES.PROJECTS_Q_BOT.Component}
            />
            <Route
              exact
              path={ROUTES.PROJECTS_TCP_CHAT_ROOM.path}
              component={ROUTES.PROJECTS_TCP_CHAT_ROOM.Component}
            />
            <Redirect to={ROUTES.HOME.path} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    </Router>
  );
}
