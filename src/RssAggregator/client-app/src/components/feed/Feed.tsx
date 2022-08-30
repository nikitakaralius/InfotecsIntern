import React from 'react';
import styles from './Feed.module.scss';
import {FeedSource, IProxy} from '../../domain/compoundTypes';
import FeedItem from '../feed-item/FeedItem';
import {useFeed} from '../../hooks/domain';

interface IFeedProps {
  feedSource: FeedSource;
  proxy: IProxy | null;
}

const Feed = ({feedSource, proxy}: IFeedProps) => {
  const [feed, error] = useFeed(feedSource, proxy);

  if (error) {
    console.log(error);
  }

  return (
    <div className={styles.container}>
      {
        feed.map(item => <FeedItem item={item} />)
      }
    </div>
  );
};

export default Feed;
