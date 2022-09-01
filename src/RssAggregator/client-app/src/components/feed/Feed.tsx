import React from 'react';
import {useFeed} from '../../hooks';
import {Article} from './article/Article';
import styles from './Feed.module.scss';

const Feed = () => {
  const {articles} = useFeed();

  if (articles.content.length == 0)
    return null;

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Feed
      </div>
      <div className={styles.list}>
        {
          articles.content.map(a =>
            <Article content={a} key={a.link}/>)
        }
      </div>
    </div>
  );
};

export {Feed}
