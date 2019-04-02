import React from 'react';
import styles from './Work.css';
import Accordion from '../Accordion';
// import hackathonPic from '../../../assets/hackathon.jpg';

const Work = () => {
  return (
    <>

      <main className={styles.Work}>
        <section>
          <h1>Work</h1>
          <article>
            <Accordion>
              <div label='QA TESTER / GRAPHIC DESIGNER'>
                <span><strong>Arts People</strong> | 2017-2018 | Portland, OR
                  <br/><a href="https://www.arts-people.com/" target="_blank" rel="noopener noreferrer">www.arts-people.com</a></span>
                <ul>
                  <li>Tested all weekly releases through multiple stages of development</li>
                  <li>Spearheaded Google Analytics integration testing, composed copy for internal help guides</li>
                  <li>Discovered security vulnerability in admin tool and paired with DevOps Lead to resolve</li>
                  <li>Proposed revised print-to-pdf concept for platform reporting feature</li>
                  <li>Extensively tested left navigation menu release with UI/UX and front-end developers to ensure seamless transition away from legacy menu</li>
                  <li>Developed internal tools used to track trends and maintain backlog</li>
                  <li>Experienced with Selenium, Protractor, Jasmine and Jenkins for automated tests</li>
                  <li>Produced graphics for ads and copy content for various marketing materials (Photoshop, Illustrator, InDesign)</li>
                  <li>Managed payment processing integrations and merchant accounts (Authorize.Net, Vantiv, AmericanExpress)</li>
                  <li>Delivered exceptional phone and email support for clients in the US & Canada</li>
                  <li>Assisted accountant with ACH billing transfers, incoming check payments, outgoing invoices and logistics</li>
                </ul>
              </div>
              <div label='TECHNICAL SUPPORT AGENT'>
                <span><strong>Squarespace</strong> | 2015-2016 | Portland, OR
                  <br/>
                  <a href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer">www.squarespace.com</a></span>
                <ul>
                  <li>Provided front-line technical assistance via live chat & email support</li>
                  <li>Utilized advanced troubleshooting techniques to communicate and quickly resolve customer issues</li>
                  <li>Consistently delivered stellar performance metrics with exceptional KPIs (including 100% Customer Satisfaction and QC ratings)</li>
                  <li>Completed {'"Introduction to Website Development"'} Portland Community College course</li>
                  <li>Taught image troubleshooting workshop for internal teams titled {'"All About Images"'}</li>
                  <li>Proficient with CMS platforms (Squarespace/Wordpress), Ecommerce (Stripe), RSS/podcasting, custom domain management/mapping, G Suite email setup</li>
                  <li>Skilled in help-desk and team collaboration tools (Zendesk/Zopim/Desk, Slack/HipChat, Trello, JIRA)</li>
                </ul>
              </div>
              <div label='WEBSITE DESIGNER / OFFICE ADMIN'>
                <span><strong>Miscellaneous Rentals</strong> | 2013 - 2014 | Austin, TX
                  <br/>
                  <a href="https://www.miscaustin.com/" target="_blank" rel="noopener noreferrer">www.miscaustin.com</a></span>
                <ul>
                  <li>Designed, developed and maintained website for local film rental company</li>
                  <li>Generated logo and marketing designs for web and print</li>
                  <li>Completed City of Austin Small Business Development SEO training</li>
                  <li>Setup and installed networking hardware and wireless routers at local film studios and music festivals (ACL/SXSW)</li>
                  <li>Provided phone and email support to customers while assisting Office Manager with bookkeeping tasks</li>
                  <li>Assisted Warehouse Manager with maintaining and repairing rental inventory</li>
                </ul>
              </div>
            </Accordion>

          </article>

          {/* <img src={hackathonPic} alt="hackathon"/> */}

        </section>
      </main>
    </>
  );
};

export default Work;
