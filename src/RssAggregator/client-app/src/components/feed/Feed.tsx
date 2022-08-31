import React from 'react';
import {useFeed} from '../../hooks';
import {Article} from './article/Article';
import styles from './Feed.module.css';

const Feed = () => {
  const {articles} = useFeed();

  return (
    <div className={styles.container}>
      {
        articles.content.map(a => <Article content={a} key={a.link}/>)
      }
    </div>
  );
};

export {Feed}
