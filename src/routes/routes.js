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
import { getProject } from '../components/projects/projectsData';

const homeBrewLink = getProject('Homebrewdog').projectLink;
const fontMemeLink = getProject('Font & Meme Generator').projectLink;
const simAlchemyLink = getProject('SimAlchemy').projectLink;
const reactReduxLink = getProject('React + Redux Blog').projectLink;
const pokedexLink = getProject('Pokedex').projectLink;
const asyncRickMortyLink = getProject('Async Rick & Morty').projectLink;
const qbotLink = getProject('Q bot').projectLink;
const tcpChatLink = getProject('TCP Chat Room').projectLink;

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
    path: homeBrewLink,
    Component: Homebrewdog,
    linkTo: () => homeBrewLink
  },
  PROJECTS_MEME_GENERATOR: {
    path: fontMemeLink,
    Component: MemeGenerator,
    linkTo: () => fontMemeLink
  },
  PROJECTS_SIM_ALCHEMY: {
    path: simAlchemyLink,
    Component: SimAlchemy,
    linkTo: () => simAlchemyLink
  },
  PROJECTS_REDUX_BLOG: {
    path: reactReduxLink,
    Component: ReduxBlog,
    linkTo: () => reactReduxLink
  },
  PROJECTS_POKEDEX: {
    path: pokedexLink,
    Component: Pokedex,
    linkTo: () => pokedexLink
  },
  PROJECTS_ASYNC_RM: {
    path: asyncRickMortyLink,
    Component: AsyncRM,
    linkTo: () => asyncRickMortyLink
  },
  PROJECTS_Q_BOT: {
    path: qbotLink,
    Component: Qbot,
    linkTo: () => qbotLink
  },
  PROJECTS_TCP_CHAT_ROOM: {
    path: tcpChatLink,
    Component: TCPchatRoom,
    linkTo: () => tcpChatLink
  }
};
