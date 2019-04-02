import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ReduxBlog.css';

const ReduxBlog = () => {
  return (
    <>

      <main className={styles.ReduxBlog}>
        <section>
          <h1>React + Redux Blog</h1>
          <span>
            <a href="https://react-redux-blog.netlify.com"
              target="_blank" rel="noopener noreferrer"
            >
              https://react-redux-blog.netlify.com
            </a>
          </span>
          <br/>
          <p>More details coming soon...</p>

          <Link to="/projects">Back</Link>
          <br/>

        </section>
      </main>

    </>
  );
};

export default ReduxBlog;
