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
                  <li>Worked with QA Lead and Deployment Manager to test all weekly releases through multiple stages of development</li>
                  <li>Spearheaded Google Analytics integration testing and composed copy for internal help guides</li>
                  <li>Discovered a security vulnerability with an admin tool and paired with DevOps Lead to resolve</li>
                  <li>Proposed revised print-to-pdf concept for platform reporting feature</li>
                  <li>Extensively tested left navigation menu release with UI/UX and front-end developers to ensure seamless transition away from legacy menu</li>
                  <li>Developed internal tools used to track trends and maintain backlog archives for bugs and features</li>
                  <li>Experienced with Selenium, Jasmine and Jenkins for automated tests</li>
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
                  <li>Administered adept live chat & email support using advanced troubleshooting techniques to determine real-time diagnoses</li>
                  <li>Completed {'Introduction to Website Development'} Portland Community College course</li>
                  <li>Consistently delivered stellar performance metrics with exceptional KPIs (including 100% Customer Satisfaction and QC ratings)</li>
                  <li>Taught image troubleshooting workshop for internal teams titled {'All About Images'}</li>
                  <li>Proficient with CMS platforms (Squarespace/Wordpress), Ecommerce (Stripe), RSS/podcasting, custom domain management/mapping, G Suite email setup</li>
                  <li>Skilled in help-desk and team collaboration tools (Zendesk/Zopim/Desk, Slack/HipChat, Trello, JIRA)</li>
                </ul>
              </div>
              <div label='WEBSITE DESIGNER / OFFICE ADMIN'>
                <span><strong>Miscellaneous Rentals</strong> | 2013 - 2014 | Austin, TX
                  <br/>
                  <a href="https://www.miscaustin.com/" target="_blank" rel="noopener noreferrer">www.miscaustin.com</a></span>
                <ul>
                  <li>Designed, proposed and developed rental website</li>
                  <li>Generated logo and marketing designs for web + print</li>
                  <li>Completed City of Austin Small Business Development SEO course</li>
                  <li>Provided phone and email support while assisting Office Manager with bookkeeping tasks</li>
                  <li>Setup and installed networking hardware and wireless routers at local film studios and music festivals (ACL/SXSW)</li>
                  <li>Assisted Warehouse Manager with maintaining and repairing rental inventory</li>
                </ul>
              </div>
            </Accordion>

            {/* <hr/>

            <div>
              <h3>QA TESTER / GRAPHIC DESIGNER</h3>
              <strong>Arts People</strong> | 2017-2018 | Portland, OR
              <br/>
              <a href="https://www.arts-people.com/" target="_blank" rel="noopener noreferrer">www.arts-people.com</a>
              <ul>
                <li>Worked with QA Lead and Deployment Manager to test all weekly releases through multiple stages of development (sprint, alpha, stage, production)</li>
                <li>Spearheaded Google Analytics integration testing and composed copy for internal help guides</li>
                <li>Discovered and reported a security vulnerability within an admin interface and paired with DevOps Lead to resolve</li>
                <li>Proposed revised print-to-pdf concept for platform reporting feature</li>
                <li>Extensively tested left navigation menu release with UI/UX and front-end developers to ensure seamless transition away from legacy menu</li>
                <li>Developed internal tools used to track trends and maintain backlog archives for bugs and features</li>
                <li>Experienced with Selenium, Jasmine and Jenkins for automated tests</li>
                <li>Produced Adobe CC graphics for ads and copy content for various marketing materials (Photoshop, Illustrator, InDesign)</li>
                <li>Managed payment processing integration and merchant account maintenance (Authorize.Net, Vantiv, AmericanExpress)</li>
                <li>Delivered exceptional phone and email support for clients in the US & Canada</li>
                <li>Assisted accountant with ACH billing transfers, incoming check payments, outgoing invoices and logistics</li>
              </ul>
            </div>
          </article>

          <article>
            <div>
              <h3>TECHNICAL SUPPORT AGENT</h3>
              <strong>Squarespace</strong> | 2015-2016 | Portland, OR
              <br/>
              <a href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer">www.squarespace.com</a>
              <ul>
                <li>Administered adept live chat & email support using advanced troubleshooting techniques to determine real-time diagnoses</li>
                <li>Attended {'Introduction to Website Development'} Portland Community College course courtesy training program</li>
                <li>Consistently delivered stellar performance metrics with exceptional KPIs (including 100% Customer Satisfaction and QC ratings)</li>
                <li>Led an image troubleshooting workshop for internal teams titled {'All About Images'}</li>
                <li>Proficient with CMS platforms (Squarespace/Wordpress), Ecommerce (Stripe), RSS/podcasting, custom domain management/mapping, G Suite email setup</li>
                <li>Skilled in help-desk and team collaboration tools (Zendesk/Zopim/Desk, Slack/HipChat, Trello, JIRA)</li>
              </ul>
            </div>
          </article>

          <article>
            <div>
              <h3>WEBSITE DESIGNER / GRAPHIC DESIGNER / OFFICE ADMIN</h3>
              <strong>Miscellaneous Rentals</strong> | 2013 - 2014 | Austin, TX
              <br/>
              <a href="https://www.miscaustin.com/" target="_blank" rel="noopener noreferrer">www.miscaustin.com</a>
              <ul>
                <li>Designed, proposed and developed rental website with inventory quote form</li>
                <li>Generated logo and marketing designs for web + print promotional materials</li>
                <li>Provided phone and email support while assisting Office Manager with bookkeeping tasks</li>
                <li>Setup and installed networking hardware and wireless routers on and off site</li>
                <li>Delivered rental products to local film studios and musical festivals (ACL/SXSW)</li>
                <li>Assisted Warehouse Manager with maintaining and repairing rental inventory</li>
              </ul>
            </div> */}

          </article>

          {/* <img src={hackathonPic} alt="hackathon"/> */}

        </section>
      </main>
    </>
  );
};

export default Work;
