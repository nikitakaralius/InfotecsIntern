import {FeedSource, FeedStream, IArticle, SortedFeed, StreamStorage} from './compoundTypes';

interface IPrimitiveSortedFeed {
  content: IArticle[];
}

const castToPrimitiveSortedFeed = (feed: SortedFeed) => {
  const primitive: IPrimitiveSortedFeed = {
    content: feed.content
  };
  return primitive;
};

const castToSortedFeed = (feed: IPrimitiveSortedFeed) => {
  return SortedFeed.create(feed.content);
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
