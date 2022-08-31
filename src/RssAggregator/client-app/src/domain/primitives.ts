import {FeedSource, FeedStream, IArticle, SortedFeed, StreamStorage} from './compoundTypes';
import {String100, String250} from './simpleTypes';

interface IPrimitiveArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
}

interface IPrimitiveSortedFeed {
  content: IPrimitiveArticle[];
}

const mapToPrimitiveArticle = (article: IArticle): IPrimitiveArticle => {
  return {
    title: article.title.content,
    description: article.description.content,
    link: article.link.href,
    pubDate: article.pubDate.toDateString()
  };
};

const mapToArticle = (primitive: IPrimitiveArticle): IArticle => {
  return {
    title: String100.createClamped(primitive.title),
    description: String250.createClamped(primitive.description),
    link: new URL(primitive.link),
    pubDate: new Date(primitive.pubDate)
  };
};

const castToPrimitiveSortedFeed = (feed: SortedFeed) => {
  const primitive: IPrimitiveSortedFeed = {
    content: feed.content.map(mapToPrimitiveArticle)
  };
  return primitive;
};

const castToSortedFeed = (feed: IPrimitiveSortedFeed) => {
  return SortedFeed.create(feed.content.map(mapToArticle));
};

interface IPrimitiveStreamStorage {
  streams: FeedStream[];
  source: FeedSource;
}

const castToPrimitiveStreamStorage = (storage: StreamStorage) => {
  const primitive: IPrimitiveStreamStorage = {
    streams: storage.getStreams(),
    source: storage.getSource()
  };
  return primitive;
};

const castToStreamStorage = (storage: IPrimitiveStreamStorage) => {
  return StreamStorage.create(storage.streams);
};

export type {IPrimitiveSortedFeed, IPrimitiveStreamStorage};
export {
  castToPrimitiveSortedFeed,
  castToSortedFeed,
  castToPrimitiveStreamStorage,
  castToStreamStorage
};
