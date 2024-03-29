const projectsList = [
  {
    name:'@caripizza/ui',
    description:'A design system and open-source component library made with React, Typescript, and Tailwind CSS.',
    projectLink:'/projects/caripizza-ui',
    githubLink:'https://github.com/caripizza/ui',
    deployedLink:'https://main--63376424914401d9d4d73e3b.chromatic.com/',
  },
  {
    name: 'Search Top Headlines',
    description: 'Mobile-responsive Vue 2 SPA with typeahead input search that calls News API for top headlines, with @caripizza/ui styles',
    projectLink: '/projects/search-the-web',
    githubLink: 'https://github.com/caripizza/search-the-web',
    deployedLink: 'https://caripizza.github.io/search-the-web/'
  },
  {
    name: 'Q bot',
    description: `Slack bot and web app for Alchemy Code Lab, made with Slack's 
    Events & Conversations API's, Google Cloud Firestore, Firebase
    OAuth (GitHub + Google), ReactJS, React Hooks, Google Cloud
    Functions, Moment.js, SASS and more.`,
    projectLink: '/projects/q-bot',
    githubLink: 'https://github.com/team-q/q-bot-sandbox'
  },
  {
    name: 'React + Redux Blog',
    description: `Written in React/Redux and styled with Styled-Components, this app
    utilizes the JSON placeholder API to generate and filter users,
    posts, and comments.`,
    projectLink: '/projects/redux-blog',
    githubLink: 'https://github.com/caripizza/redux-blog'
  },
  {
    name: 'SimAlchemy',
    description: `Back-end app featuring a code school game for the command line,
    utilizing MongoDB/Mongoose, Express.js, Node.js, and Inquirer;
    deployed to Heroku.`,
    projectLink: '/projects/SimAlchemy',
    githubLink: 'https://github.com/team-sailboat/SimAlchemy'
  },
  {
    name: 'Homebrewdog',
    description: `RESTful web app utilizing the Brewdog Brewery API with VueJS for
    the front-end, PostgreSQL + Express on the back-end, and deployed
    to Heroku.`,
    projectLink: '/projects/homebrewdog',
    githubLink: 'https://github.com/team-thermometer'
  },
  {
    name: 'TCP Chat Room',
    description: `Back-end chat server allowing multiple clients to connect via the
    command line and chat with each other using short commands (@all,
    @dm, @nick); includes unit tests.`,
    projectLink: '/projects/tcp-chat-room',
    githubLink: 'https://github.com/caripizza/tcp-server'
  },
  {
    name: 'Async Rick & Morty',
    description: `SPA made with React + PostCSS, utilizes the Rick & Morty Api to
    fetch and display paginated lists of characters and locations.`,
    projectLink: '/projects/async-rm',
    githubLink: 'https://github.com/caripizza/async-react'
  },
  {
    name: 'Font & Meme Generator',
    description: `SPA WYSIWYG editor allowing users to download their fonts and meme
    creations as image files. (React, Node.js, Figlet, Webpack,
    PostCSS, HTML)`,
    projectLink: '/projects/meme-generator',
    githubLink: 'https://github.com/caripizza/meme-generator'
  },
  {
    name: 'Pokedex',
    description: `Single Page Pokémon search & filter app made with VueJS, HTML, and
    CSS.`,
    projectLink: '/projects/pokedex',
    githubLink: 'https://github.com/caripizza/return-of-pokedex'
  },
  {
    name: 'ChartJS',
    description: 'A few charts rendered with Chart.js and Vanilla JavaScript',
    projectLink: '/projects/chartjs',
    githubLink: 'https://github.com/caripizza/chartjs',
    deployedLink: 'https://caripizza.github.io/chartjs'
  },
  {
    name: 'Loan Origination System',
    description: 'Single page React app with form validation and submission to Firestore, displaying collection results, with hosting on Firebase/GCP',
    projectLink: '/projects/firebase-notes',
    githubLink: 'https://github.com/caripizza/firebase-notes',
    deployedLink: 'https://fir-notes-371b7.firebaseapp.com/'
  },
  {
    name: 'Synths',
    description: 'Responsive SPA made with Vue 2, displays a clickable list of vintage synthesizers',
    projectLink: '/projects/list-of-synths',
    githubLink: 'https://github.com/caripizza/list-of-vue',
    deployedLink: 'https://caripizza.github.io/list-of-vue/'
  },
];

const getProject = (projectName) => {
  if(!projectName) return;
  return projectsList.find((project) => project.name === projectName);
};

export { projectsList, getProject };
