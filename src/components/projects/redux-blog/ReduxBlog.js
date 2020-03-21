import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ReduxBlog.css';
import userDetail from '../../../../assets/redux-blog/users.jpg';
import searchPosts from '../../../../assets/redux-blog/search-posts.jpg';
import longestPosts from '../../../../assets/redux-blog/longest-posts.png';
import github from '../../../../assets/github.png';

const ReduxBlog = () => {
  return (
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
        <a href="https://github.com/caripizza/redux-blog"
          target="_blank" rel="noopener noreferrer"
        >
          <img src={github} alt="github" className={styles.github}/>
        </a>
        <p>Featuring a search component allowing the user to filter through lorem ipsum blog posts:</p>
        <img src={searchPosts} alt="search-posts" className={styles.screenshots}/>
        <p>The Homepage includes the top 5 longest posts based on length:</p>
        <img src={longestPosts} alt="longest-posts" className={styles.screenshots}/>
        <p>Clicking on a Post or User takes you to the detail page:</p>
        <img src={userDetail} alt="user-detail" className={styles.screenshots}/>

        <Link to="/projects">Back</Link>
        <br/>

      </section>
    </main>

  );
};

export default ReduxBlog;
