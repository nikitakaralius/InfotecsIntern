import React from 'react';
import {Header} from '../header';
import {Feed} from '../feed';
import {StreamList} from '../streams';
import styles from './App.module.scss';
import {useConfig} from '../../hooks';

const App = () => {
  useConfig();
  return (
    <div className={styles.grid}>
      <Header />
      <Feed />
      <StreamList />
    </div>
  );
};

export default App;
