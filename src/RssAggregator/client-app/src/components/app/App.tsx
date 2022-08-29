import React from 'react';
import Header from '../header/Header';
import Feed from '../feed/Feed';
import FeedStreamList from '../feed-streams/FeedStreamList';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.grid}>
      <Header />
      <Feed />
      <FeedStreamList />
    </div>
  );
};

export default App;
