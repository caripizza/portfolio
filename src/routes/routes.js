import Home from '../components/home/Home';
import Homebrewdog from '../components/projects/homebrewdog/Homebrewdog';
import Work from '../components/work/Work';
import Projects from '../components/projects/Projects';
import MemeGenerator from '../components/projects/meme-generator/MemeGenerator';
import SimAlchemy from '../components/projects/sim-alchemy/SimAlchemy';

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
  },
  PROJECTS_MEME_GENERATOR: {
    path: '/projects/meme-generator',
    Component: MemeGenerator,
    linkTo: () => '/projects/meme-generator'
  },
  PROJECTS_SIM_ALCHEMY: {
    path: '/projects/SimAlchemy',
    Component: SimAlchemy,
    linkTo: () => '/projects/SimAlchemy'
  }
};
