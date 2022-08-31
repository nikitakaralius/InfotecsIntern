import {FeedSource, IArticle, IEnabledFeedStream, INewFeedStream, IProxy, SortedFeed} from '../domain';
import axios from 'axios';
import {parseFeed, parseStreamTitle} from './rssParser';

const bypassCors = (target: URL) => {
  return `https://thingproxy.freeboard.io/fetch/${target.href}`;
};

const fetchFeed = async (source: FeedSource, proxy: IProxy | null = null) => {
  let articles: IArticle[] = [];
  for (let stream of source) {
    const url = bypassCors(stream.link);
    const response = await axios.get(url, {proxy: proxy ?? false});
    articles = [...articles, ...parseFeed(response.data)];
  }
  return SortedFeed.create(articles);
};

const fetchStream = async (stream: INewFeedStream, proxy?: IProxy) => {
  const response = await axios.get(stream.link.href);
  const title = parseStreamTitle(response.data);
  const newStream: IEnabledFeedStream = {
    title: title,
    link: stream.link,
    active: true
  }
  return newStream;
}

export {fetchFeed, fetchStream};
