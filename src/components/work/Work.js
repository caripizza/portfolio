import React from 'react';
import styles from './Work.css';

const Work = () => {
  return (
    <>

      <main className={styles.Work}>
        <section>
          <h1>Work</h1>
          <article>
            <h2>QA TESTER & GRAPHIC DESIGNER</h2>
            <p>Arts People, Software for the Performing Arts | 2017-2018</p>
            <ul>
              <li>Delivered professional phone and email customer support for local ticketing software platform built with PHP/SQL/AngularJS</li>
              <li>Worked with engineers to test releases and provide detailed feedback on new projects</li>
              <li>Spearheaded Google Analytics support and composed copy for internal help guides</li>
              <li>Developed internal tools used to track and maintain backlog, bugs, and features</li>
              <li>Worked with QA Lead and Deployment Manager to test all weekly releases through multiple stages of development</li>
              <li>Experienced with Selenium, Jasmine and Jenkins for automated tests</li>
              <li>Produced graphics for ads and copy content for various marketing materials</li>
              <li>Managed payment processing integration and merchant accounts (Authorize.Net, Vantiv)</li>
              <li>Reported over 50 bugs tied to left navigation menu release</li>
              <li>Proposed updated print-to-pdf concept for platform reporting feature</li>
            </ul>
          </article>

          <article>
            <h2>TECHNICAL SUPPORT AGENT</h2>
            <p>Squarespace | 2015-2016</p>
            <ul>
              <li>Supplied adept live chat & email support for company with over 2 million customers</li>
              <li>Consistently delivered stellar performance metrics & exceptional KPIs (including  100% Customer Satisfaction and Quality ratings)</li>
              <li>Proficient in CMS platforms, Ecommerce (Stripe), Wordpress, SEO/Digital marketing, RSS/podcasting, custom domain management & email clients</li>
              <li>Skilled in help-desk tools like Desk, Zendesk, Zopim, Slack, Trello, JIRA, BrowserStack</li>
            </ul>
          </article>

        </section>
      </main>
    </>
  );
};

export default Work;
