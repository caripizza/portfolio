import Home from '../components/home/Home';
import Homebrewdog from '../components/homebrewdog/Homebrewdog';
import Projects from '../components/projects/Projects';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  PROJECTS: {
    path: '/projects',
    Component: Projects,
    linkTo: () => '/projects'
  },
  PROJECTS_HOMEBREWDOG: {
    path: '/projects/homebrewdog',
    Component: Homebrewdog,
    linkTo: () => '/projects/homebrewdow'
  }
};
