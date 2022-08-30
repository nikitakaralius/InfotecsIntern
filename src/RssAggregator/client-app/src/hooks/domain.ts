import {FetchFeed} from '../domain/actions';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {feedItemCmp, FeedSource, IFeedItem, IProxy, SortedFeed} from '../domain/compoundTypes';
import {FetchError} from '../domain/simpleTypes';
import {parseRss} from '../domain/parser';

const proxyUrl = (link: URL) => {
  return `https://thingproxy.freeboard.io/fetch/${link.href}`;
};

const fetchFeed: FetchFeed = async (source, proxy) => {
  let feed: IFeedItem[] = [];
  let error: FetchError = null;
  try {
    for (let stream of source) {
      const response = await axios.get(proxyUrl(stream.link));
      const items = parseRss(response.data);
      feed = [...feed, ...items];
    }
  } catch (e) {
    error = {message: e};
  }
  return [feed, error];
};

export const useFeed = (source: FeedSource, proxy: IProxy | null): [SortedFeed, FetchError] => {
  const [feed, setFeed] = useState<SortedFeed>([]);
  const [error, setError] = useState<FetchError>(null);

  const fetchFeedInternal = async () => {
    const [feed, error] = await fetchFeed(source, proxy);
    if (error) {
      setError(error);
    } else {
      feed.sort(feedItemCmp);
      setFeed(feed);
    }
  };

  useEffect(() => {
    fetchFeedInternal();
  }, [source]);

  return [feed, error];
};
