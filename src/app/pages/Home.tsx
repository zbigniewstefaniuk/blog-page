import React from 'react';
import PostsList from '../components/home/PostsList';
import styles from '../styles/home/home.styles.module.css';

const Home = () => {
  return (
    <div className={styles.root}>
      <PostsList />
    </div>
  );
};

export default Home;
