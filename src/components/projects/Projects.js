import React, { useEffect } from 'react';
import styles from './Projects.css';
import hackathonPic from '../../../assets/hackathon.jpg';
import wtfixathonPic from '../../../assets/wtfixathon.jpg';
import ImageWrapper from '../ImageWrapper';
import { projectsList } from './projectsData';
import ProjectPreview from './ProjectPreview';

const Projects = () => {

  useEffect(() => {
    document.title = 'Cari\'s Portfolio: Projects';
  }, []);

  const listOfProjects = projectsList.map((project, i) => {
    return (
      <ProjectPreview
        key={i}
        name={project.name}
        description={project.description}
        spanClassName={styles.noWrap}
        projectLink={project.projectLink}
        githubLink={project.githubLink}
        deployedLink={project.deployedLink}
      />
    );
  });

  return (
    <main className={styles.Projects}>
      <section className={styles.left} id="project-page">
        <h1>Projects</h1>
        <p className={styles.description}>
          I love the full stack, and I thrive in front-end development.
          I’m driven to create responsive, accessible interfaces through my thoughtful detailed approach.
        </p>

        <div className={styles.imgs}>
          <ImageWrapper
            alt="hackathon-pic"
            className={styles.fadeIn} width="auto" height="auto"
            src={hackathonPic}
          />
          <p className={styles.caption}>
            <span>
              Speaking at Puppet for the Nike We Code For Good Hackathon, Jan 2019
            </span>
          </p>
          <br />
          <ImageWrapper
            alt="wtfixathon-pic"
            className={styles.fadeIn} width="auto" height="auto"
            src={wtfixathonPic}
          />
          <p className={styles.caption}>
            <span>Coding at PSU for the TechFestNW + HealthSparq #WTFix-a-thon, <a
              className={styles.twitter}
              href="https://twitter.com/HealthSparq/status/1113864386865651712?ref_src=twsrc%5Etfw"
              target="_blank"
              rel="noopener noreferrer"
            >
              April 2019
            </a></span>
          </p>
          <ul>
            <h3>Memberships</h3>
            <li><span>PDXWIT | Portland Women in Tech</span></li>
            <li><span>Portland Women Who Code</span></li>
            <li><span>PDX Node</span></li>
            <li><span>Portland ReactJS</span></li>
            <li><span>JavaScript Admirers</span></li>
            <li><span>Serverless Portland</span></li>
            <li><span>Front End PDX</span></li>
            <li><span>DeTrash Portland</span></li>
            <li><span>SOLVE Oregon</span></li>
          </ul>
        </div>
      </section>

      <section className={styles.right}>
        <div id="right-container" className={styles.rightContainer}>
          <span id="top" hidden=""></span>
          {listOfProjects}
          <a href="#top">top</a>
        </div>
      </section>
    </main>
  );
};

export default Projects;
