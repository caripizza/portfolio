import Home from '../components/home/Home';
import Homebrewdog from '../components/projects/homebrewdog/Homebrewdog';
import Work from '../components/work/Work';
import Projects from '../components/projects/Projects';
import MemeGenerator from '../components/projects/meme-generator/MemeGenerator';
import SimAlchemy from '../components/projects/sim-alchemy/SimAlchemy';
import ReduxBlog from '../components/projects/redux-blog/ReduxBlog';
import Pokedex from '../components/projects/pokedex/Pokedex';
import AsyncRM from '../components/projects/async-rm/AsyncRM';
import Qbot from '../components/projects/q-bot/Qbot';

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
  },
  PROJECTS_REDUX_BLOG: {
    path: '/projects/redux-blog',
    Component: ReduxBlog,
    linkTo: () => '/projects/redux-blog'
  },
  PROJECTS_POKEDEX: {
    path: '/projects/pokedex',
    Component: Pokedex,
    linkTo: () => '/projects/pokedex'
  },
  PROJECTS_ASYNC_RM: {
    path: '/projects/async-rm',
    Component: AsyncRM,
    linkTo: () => '/projects/async-rm'
  },
  PROJECTS_Q_BOT: {
    path: '/projects/q-bot',
    Component: Qbot,
    linkTo: () => '/projects/q-bot'
  }
};
