import {FetchFeed} from './actions';
import {IActiveFeedStream, IFeedItem, INewFeedStream} from './compoundTypes';
import {FetchError, String100} from './simpleTypes';
import {parseFeed, parseStream} from './parser';
import axios from 'axios';

const bypassCorsProxy = (target: URL) => {
  return `https://thingproxy.freeboard.io/fetch/${target.href}`;
};

const fetchFeed: FetchFeed = async (source, proxy) => {
  let feed: IFeedItem[] = [];
  let error: FetchError = null;
  try {
    for (let stream of source) {
      const url = bypassCorsProxy(stream.link);
      const response = await axios.get(url, {
        proxy: proxy !== null ? proxy : false
      });
      const items = parseFeed(response.data);
      feed = [...feed, ...items];
    }
  } catch (e) {
    error = e;
  }

  return [feed, error];
};

const fetchStream = async (stream: INewFeedStream): Promise<IActiveFeedStream> => {
  const response = await axios.get(stream.link.href);
  const title = parseStream(response.data);
  return {
    title: String100.createClamped(title),
    link: stream.link,
    active: true
  };

};

export {fetchFeed, fetchStream};
