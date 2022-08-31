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

interface ISettingsStorage {
  updateStepSeconds: number;
  proxy: IProxy | null;
}

interface IArticle {
  title: String100;
  description: String250;
  link: URL;
  pubDate: Date;
}

interface IEnabledFeedStream {
  title: string;
  link: string;
  active: true;
}

interface IDisabledFeedStream {
  title: string;
  link: string;
  active: false;
}

interface INewFeedStream {
  link: string;
}

type FeedStream = IEnabledFeedStream | IDisabledFeedStream;

type FeedSource = IEnabledFeedStream[];

class StreamStorage {
  readonly streams: FeedStream[];
  readonly source: IEnabledFeedStream[];

  private constructor(streams: FeedStream[], source: IEnabledFeedStream[]) {
    this.streams = streams;
    this.source = source;
  }

  static create(streams: FeedStream[]) {
    const unique = streams.filter((value, index) => streams.indexOf(value) === index);
    const source = unique.filter(activeStreamFilter);
    return new StreamStorage(unique, source);
  }

  static empty() {
    return new StreamStorage([], []);
  }

  getStreams(): FeedStream[] {
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

  append(stream: IEnabledFeedStream) {
    const index = this.streams.findIndex(s => streamEquality(s, stream));
    if (index !== -1) return;
    this.streams.push(stream);
    this.source.push(stream);
  }
}

class SortedFeed {
  readonly content: IArticle[];

  private constructor(feed: IArticle[]) {
    this.content = feed;
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
  INewFeedStream,
  ISettingsStorage
};
