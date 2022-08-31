import {activeStreamFilter, articleComparer, String100, String250} from './index';

interface IProxy {
  host: string;
  port: number;
  protocol: string;
  auth: {
    username: string;
    password: string;
  };
}

interface IArticle {
  title: String100;
  description: String250;
  link: URL;
  pubDate: Date;
}

interface IEnabledFeedStream {
  title: string;
  link: URL;
  active: true;
}

interface IDisabledFeedStream {
  title: string;
  link: URL;
  active: false;
}

interface INewFeedStream {
  link: URL;
}

type FeedStream = IEnabledFeedStream | IDisabledFeedStream;

type FeedSource = IEnabledFeedStream[];

class StreamStorage {
  readonly streams: FeedStream[];
  readonly source: FeedSource;

  constructor(streams: FeedStream[]) {
    this.streams = streams;
    this.source = streams.filter(activeStreamFilter);
  }
}

class SortedFeed {
  readonly feed: IArticle[];

  private constructor(feed: IArticle[]) {
    this.feed = feed;
  }

  static create(feed: IArticle[]) {
    feed.sort(articleComparer);
    return new SortedFeed(feed);
  }

  static empty() {
    return new SortedFeed([]);
  }
}

export {SortedFeed, StreamStorage};
export type {
  IProxy,
  IArticle,
  FeedSource,
  FeedStream,
  IEnabledFeedStream,
  IDisabledFeedStream,
  INewFeedStream
};
