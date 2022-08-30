import {FetchFeed} from './actions';
import {IFeedItem} from './compoundTypes';
import {FetchError} from './simpleTypes';
import {parseRss} from './parser';
import axios from 'axios';

const bypassCorsProxy = (target: URL) => {
  return `https://thingproxy.freeboard.io/fetch/${target.href}`;
};

export const fetchFeed: FetchFeed = async (source, proxy) => {
  let feed: IFeedItem[] = [];
  let error: FetchError = null;
  try {
    for (let stream of source) {
      const url = bypassCorsProxy(stream.link)
      const response = await axios.get(url, {
        proxy: proxy !== null ? proxy : false
      });
      const items = parseRss(response.data);
      feed = [...feed, ...items];
    }
  } catch (e) {
    error = e;
  }

  return [feed, error];
};
