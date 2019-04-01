import React from 'react';
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
        </section>
      </main>

    </>
  );
};

export default ReduxBlog;
