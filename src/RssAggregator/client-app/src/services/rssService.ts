import {FeedSource, IArticle, IProxy, SortedFeed} from '../domain';
import axios from 'axios';
import {parseFeed} from './rssParser';

const bypassCors = (target: URL) => {
  return `https://thingproxy.freeboard.io/fetch/${target.href}`;
};

const fetchFeed = async (source: FeedSource, proxy?: IProxy) => {
  let articles: IArticle[] = [];
  for (let stream of source) {
    const url = bypassCors(stream.link);
    const response = await axios.get(url, {proxy: proxy ?? false});
    articles = [...articles, ...parseFeed(response.data)];
  }
  return SortedFeed.create(articles);
};

export {fetchFeed};
