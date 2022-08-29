import React, {useEffect, useState} from 'react';
import styles from './Feed.module.scss';
import {FetchFeed} from '../../domain/actions';
import {FeedSource, IProxy, SortedFeed} from '../../domain/compoundTypes';
import FeedItem from '../feed-item/FeedItem';

interface IFeedProps {
  feedSource: FeedSource;
  fetchFeed: FetchFeed;
  proxy: IProxy | null;
}

const Feed = ({feedSource, fetchFeed, proxy}: IFeedProps) => {
  const [feed, setFeed] = useState<SortedFeed>([]);

  useEffect(() => {
    fetchFeed(feedSource, proxy)
      .then(f => setFeed(f));
  }, []);

  return (
    <div className={styles.container}>
      {
        feed.map(item => <FeedItem item={item} />)
      }
    </div>
  );
};

export default Feed;
