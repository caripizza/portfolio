import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProjectPreview({
  name,
  description,
  spanClassName,
  projectLink,
  githubLink,
  deployedLink
}) {
  return (
    <article>
      <h3>{name}</h3>
      <br />
      <span>
        {description}
      </span>
      <br />
      <span className={spanClassName}>
        {!deployedLink ? <Link to={projectLink}>View project</Link> : (
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        )} -
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </span>
    </article>
  );
}

ProjectPreview.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  spanClassName: PropTypes.string,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  deployedLink: PropTypes.string,
};
