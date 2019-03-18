import Home from '../components/home/Home';
import Homebrewdog from '../components/homebrewdog/Homebrewdog';
import Work from '../components/work/Work';
import Projects from '../components/projects/Projects';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  WORK: {
    path: '/work',
    Component: Work,
    linkTo: () => '/work'
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
