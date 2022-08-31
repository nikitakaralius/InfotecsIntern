import {activeStreamFilter, articleComparer, streamEquality, String100, String250} from './index';

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

type FeedSource = readonly IEnabledFeedStream[];

class StreamStorage {
  private readonly streams: FeedStream[];
  private readonly source: IEnabledFeedStream[];

  private constructor(streams: FeedStream[], source: IEnabledFeedStream[]) {
    this.streams = streams;
    this.source = source;
  }

  static create(streams: FeedStream[]) {
    const source = streams.filter(activeStreamFilter);
    return new StreamStorage(streams, source);
  }

  static empty() {
    return new StreamStorage([], []);
  }

  getStreams(): readonly FeedStream[] {
    return this.streams;
  }

  getSource(): FeedSource {
    return this.source;
  }

  enable(stream: IDisabledFeedStream) {
    const index = this.streams.findIndex(s => streamEquality(s, stream));
    if (index === -1) return;
    this.streams[index] = {
      title: stream.title,
      link: stream.link,
      active: true
    };
  }

  disable(stream: IEnabledFeedStream) {
    const index = this.streams.findIndex(s => streamEquality(s, stream));
    if (index === -1) return;
    this.streams[index] = {
      title: stream.title,
      link: stream.link,
      active: false
    };
  }

  append(stream: IEnabledFeedStream): StreamStorage {
    const streams = [...this.streams, stream];
    return StreamStorage.create(streams);
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
