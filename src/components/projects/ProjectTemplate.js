import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import github from '../../../assets/github.png';
import styles from './ProjectTemplate.css';

const ProjectTemplate = ({
  name,
  children,
  projectSiteUrl,
  projectGitHub,
  projectStyles,
  projectDescription
}) => {

  useEffect(() => {
    document.title = `Cari's Projects: ${name}`;
  }, []);

  return (
    <main className={`${styles.ProjectTemplate} ${projectStyles}`}>
      <section>
        <h1>{name}</h1>
        <article>
          {projectDescription}
        </article>
        {projectSiteUrl && (
          <>
            <span>
              <a href={projectSiteUrl}
                target="_blank" rel="noopener noreferrer"
              >
                {projectSiteUrl}
              </a>
            </span>
            <br/>
          </>
        )}
        <a href={projectGitHub}
          target="_blank" rel="noopener noreferrer"
        >
          <img src={github} alt="github" className={styles.github}/>
        </a>

        {children}

        <Link to="/projects">Back</Link>
        <br/>

      </section>
    </main>
  );
};

ProjectTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  projectSiteUrl: PropTypes.string,
  projectGitHub: PropTypes.string.isRequired,
  projectStyles: PropTypes.string,
  projectDescription: PropTypes.string.isRequired,
};

export default ProjectTemplate;
