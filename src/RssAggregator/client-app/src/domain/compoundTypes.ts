import {String50, String100} from './simpleTypes';

export interface IFeedItem {
  title: String50;
  description: String100;
  link: URL;
  pubDate: Date;
}

export interface IActiveFeedStream {
  title: String50;
  link: URL;
}

export interface IInactiveFeedStream {
  title: String50;
  link: URL;
}

export interface INewFeedStream {
  link: URL;
}

export type IFeedStream = IActiveFeedStream | IInactiveFeedStream;

export type SortedFeed = IFeedItem[];

export type FeedSource = IActiveFeedStream[];

export interface IProxy {
  host: URL;
  port: number;
  username: string;
  password: string;
}
