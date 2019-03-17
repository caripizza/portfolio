import Home from '../components/home/Home';
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
  }
};
