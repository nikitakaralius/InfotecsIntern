import {FeedStream, IArticle, IEnabledFeedStream} from './index';

const articleComparer = (x: IArticle, y: IArticle) => x.pubDate.getTime() - y.pubDate.getTime();

const activeStreamFilter = (stream: FeedStream): stream is IEnabledFeedStream => {
  return stream.active;
};

const streamEquality = (x: FeedStream, y: FeedStream) => {
  return x.active === y.active && x.link === y.link;
}

export {articleComparer, activeStreamFilter, streamEquality};
