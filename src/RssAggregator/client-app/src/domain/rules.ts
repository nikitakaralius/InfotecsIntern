import {FeedStream, IArticle, IEnabledFeedStream} from './index';

const articleComparer = (x: IArticle, y: IArticle) => x.pubDate.getTime() - y.pubDate.getTime();

const activeStreamFilter = (stream: FeedStream): stream is IEnabledFeedStream => {
  return stream.active;
};

export {articleComparer, activeStreamFilter};
