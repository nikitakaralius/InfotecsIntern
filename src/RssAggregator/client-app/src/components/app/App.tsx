import React from 'react';
import Header from '../header/Header';
import Feed from '../feed/Feed';
import FeedStreamList from '../feed-stream-list/FeedStreamList';
import styles from './App.module.scss';
import {feedSource, streams} from '../../store';

const App = () => {
  return (
    <div className={styles.grid}>
      <Header />
      <Feed feedSource={feedSource} proxy={null}/>
      <FeedStreamList streams={streams} />
    </div>
  );
};

export default App;
