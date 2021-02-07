import Home from '../components/home/Home';
import Homebrewdog from '../components/projects/homebrewdog/Homebrewdog';
import Projects from '../components/projects/Projects';
import MemeGenerator from '../components/projects/meme-generator/MemeGenerator';
import SimAlchemy from '../components/projects/sim-alchemy/SimAlchemy';
import ReduxBlog from '../components/projects/redux-blog/ReduxBlog';
import Pokedex from '../components/projects/pokedex/Pokedex';
import AsyncRM from '../components/projects/async-rm/AsyncRM';
import Qbot from '../components/projects/q-bot/Qbot';
import TCPchatRoom from '../components/projects/chatroom/TCPchatRoom';
import { projectsList } from '../components/projects/projectsData';

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
    path: projectsList[3].projectLink,
    Component: Homebrewdog,
    linkTo: () => projectsList[3].projectLink
  },
  PROJECTS_MEME_GENERATOR: {
    path: projectsList[6].projectLink,
    Component: MemeGenerator,
    linkTo: () => projectsList[6].projectLink
  },
  PROJECTS_SIM_ALCHEMY: {
    path: projectsList[2].projectLink,
    Component: SimAlchemy,
    linkTo: () => projectsList[2].projectLink
  },
  PROJECTS_REDUX_BLOG: {
    path: projectsList[1].projectLink,
    Component: ReduxBlog,
    linkTo: () => projectsList[1].projectLink
  },
  PROJECTS_POKEDEX: {
    path: projectsList[7].projectLink,
    Component: Pokedex,
    linkTo: () => projectsList[7].projectLink
  },
  PROJECTS_ASYNC_RM: {
    path: projectsList[5].projectLink,
    Component: AsyncRM,
    linkTo: () => projectsList[5].projectLink
  },
  PROJECTS_Q_BOT: {
    path: projectsList[0].projectLink,
    Component: Qbot,
    linkTo: () => projectsList[0].projectLink
  },
  PROJECTS_TCP_CHAT_ROOM: {
    path: projectsList[4].projectLink,
    Component: TCPchatRoom,
    linkTo: () => projectsList[4].projectLink
  }
};
