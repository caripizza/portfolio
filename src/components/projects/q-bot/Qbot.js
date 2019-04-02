import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Qbot.css';
import slackApp from '../../../../assets/qbot/QbotSlackapp.png';
import slackThread from '../../../../assets/qbot/slackthread.png';
import TAqueue from '../../../../assets/qbot/queue.png';
import TAleaderboard from '../../../../assets/qbot/leaderboard.png';

const Qbot = () => {
  return (
    <>

      <main className={styles.Qbot}>
        <section>
          <h1>Q bot</h1>
          <span>
            <a href="https://qbot.alchemycodelab.io/"
              target="_blank" rel="noopener noreferrer"
            >
              https://qbot.alchemycodelab.io
            </a>
          </span>
          <br/>
          <p>Featuring a Slack bot that replies in a thread, with confirmation that the question was added to the Firestore collection:</p>
          <img src={slackApp} alt="slack-app-logo"/>
          <img src={slackThread} alt="slack-bot-reply"/>
          <p>Allowing {'TA\'s'} to login securely so they can filter, sort, claim, and solve questions from the queue:</p>
          <img src={TAqueue} alt="TA-queue"/>
          <p>Includes a leaderboard to keep track of which {'TA\'s'} have solved the most questions per cohort, and a form to add new {'TA\'s'}:</p>
          <img src={TAleaderboard} alt="TA-leaderboard"/>

          <Link to="/projects">Back</Link>
          <br/>

        </section>
      </main>

    </>
  );
};

export default Qbot;
