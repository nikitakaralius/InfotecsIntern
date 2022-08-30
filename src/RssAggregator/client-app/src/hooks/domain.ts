import {useEffect, useState} from 'react';
import {feedItemCmp, FeedSource, IProxy, SortedFeed} from '../domain/compoundTypes';
import {FetchError} from '../domain/simpleTypes';
import {fetchFeed} from '../domain/rss';

export const useFeed = (source: FeedSource, proxy: IProxy | null): [SortedFeed, FetchError] => {
  const [feed, setFeed] = useState<SortedFeed>([]);
  const [error, setError] = useState<FetchError>(null);

  const fetch = async () => {
    const [feed, error] = await fetchFeed(source, proxy);
    if (error) {
      setError(error);
    } else {
      feed.sort(feedItemCmp);
      setFeed(feed);
    }
  };

  useEffect(() => {
    fetch();
  }, [source]);

  return [feed, error];
};
