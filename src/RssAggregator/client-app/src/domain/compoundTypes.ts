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

export type FeedSource = IFeedStream[];

export interface IProxy {
  host: URL;
  port: number;
  username: string;
  password: string;
}

export type ConnectionStatus = 'Success' | 'Failure';

export type fetchFeed = (source: FeedSource, proxy: IProxy | null) => SortedFeed;

export type connectToProxy = (proxy: IProxy) => ConnectionStatus;

export type appendFeedStream = (stream: INewFeedStream) => FeedSource;
