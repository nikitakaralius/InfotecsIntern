import {String80, String100} from './simpleTypes';

export interface IFeedItem {
  title: String80;
  description: String100;
  link: URL;
  pubDate: Date;
}

export const feedItemCmp = (x: IFeedItem, y: IFeedItem) =>
  x.pubDate.getTime() - y.pubDate.getTime();

export interface IActiveFeedStream {
  title: String80;
  link: URL;
}

export interface IInactiveFeedStream {
  title: String80;
  link: URL;
}

export interface INewFeedStream {
  link: URL;
}

export type IFeedStream = IActiveFeedStream | IInactiveFeedStream;

export type SortedFeed = IFeedItem[];

export type FeedSource = IActiveFeedStream[];

export interface IProxy {
  host: string;
  port: number;
  protocol: string;
  auth: {
    username: string;
    password: string;
  }
}
