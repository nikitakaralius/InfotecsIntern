import {String100, String250} from './index';

interface IProxy {
  host: string;
  port: number;
  protocol: string;
  auth: {
    username: string;
    password: string;
  }
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
}

interface IDisabledFeedStream {
  title: string;
  link: URL;
}

interface INewFeedStream {
  link: URL;
}

type FeedStream = IEnabledFeedStream | IDisabledFeedStream;

type StreamStorage = FeedStream[];

type FeedSource = IEnabledFeedStream[];

export type {IProxy, IArticle};
