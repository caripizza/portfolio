import React from 'react';
import styles from './ReduxBlog.css';
import userDetail from '../../../../assets/redux-blog/users.jpg';
import searchPosts from '../../../../assets/redux-blog/search-posts.jpg';
import longestPosts from '../../../../assets/redux-blog/longest-posts.png';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { getProject } from '../projectsData';

const ReduxBlog = () => {
  const project = getProject('React + Redux Blog');
  return (
    <ProjectTemplate
      name={project.name}
      projectSiteUrl="https://react-redux-blog.netlify.com"
      projectGitHub={project.githubLink}
      projectStyles={styles.ReduxBlog}
      projectDescription={project.description}
    >
      <p>Featuring a search component allowing the user to filter through lorem ipsum blog posts:</p>
      <ImageWrapper 
        alt="search-posts"
        width="auto" height="auto"
        src={searchPosts}
      />

      <p>The Homepage includes the top 5 longest posts based on length:</p>
      <ImageWrapper 
        alt="longest-posts"
        width="auto" height="auto"
        src={longestPosts}
      />

      <p>Clicking on a Post or User takes you to the detail page:</p>
      <ImageWrapper 
        alt="user-detail"
        width="auto" height="auto"
        src={userDetail}
      />

    </ProjectTemplate>
  );
};

export default ReduxBlog;
