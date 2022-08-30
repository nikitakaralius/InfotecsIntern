import React from 'react';
import {IFeedItem} from '../../domain/compoundTypes';
import styles from './FeedItem.module.scss';

interface IFeedItemProps {
  item: IFeedItem;
}

const FeedItem = ({item}: IFeedItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.article}>
        <a href={item.link.href} target="_blank" className={styles.link}>
          <span>{item.title.content}</span>
        </a>
      </div>

      <div className={styles.explore}>
        <span>Explore</span>
      </div>
    </div>
  );
};

export default FeedItem;

