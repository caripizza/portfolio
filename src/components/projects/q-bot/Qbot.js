import React from 'react';
import slackApp from '../../../../assets/qbot/QbotSlackapp.png';
import slackThread from '../../../../assets/qbot/slackthread.png';
import TAqueue from '../../../../assets/qbot/queue.png';
import TAleaderboard from '../../../../assets/qbot/leaderboard.png';
import ImageWrapper from '../../ImageWrapper';
import ProjectTemplate from '../ProjectTemplate';
import { projectsList } from '../projectsData';

const Qbot = () => {
  return (
    <ProjectTemplate
      name={projectsList[0].name}
      projectGitHub={projectsList[0].githubLink}
      projectDescription={projectsList[0].description}
    >
      <p>Featuring a Slack bot that replies in a thread, with confirmation that the question was added to the Firestore collection:</p>
      <ImageWrapper 
        alt="slack-app-logo"
        width="auto" height="auto"
        src={slackApp}
      />
      <ImageWrapper 
        alt="slack-bot-reply"
        width="auto" height="auto"
        src={slackThread}
      />

      <p>Allowing {'TA\'s'} to login securely so they can filter, sort, claim, and solve questions from the queue:</p>
      <ImageWrapper 
        alt="TA-queue"
        width="auto" height="auto"
        src={TAqueue}
      />

      <p>Includes a leaderboard to keep track of which {'TA\'s'} have solved the most questions per cohort, and a form to add new {'TA\'s'}:</p>
      <ImageWrapper 
        alt="TA-leaderboard"
        width="auto" height="auto"
        src={TAleaderboard}
      />
    </ProjectTemplate>
  );
};

export default Qbot;
