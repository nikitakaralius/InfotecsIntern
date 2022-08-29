import {String50, String100} from './simpleTypes';

export interface IFeedItem {
  title: String50;
  description: String100;
  link: URL;
  pubDate: Date;
}

export interface IFeed {
  title: String50;
  link: URL;
}

export type SortedFeedStream = IFeedItem[];

export interface IProxy {
  host: URL;
  port: number;
  username: string;
  password: string;
}

export type ConnectionStatus = 'Success' | 'Failure';

export type fetchFeed = (feed: IFeed, proxy: IProxy | null) => SortedFeedStream;

export type connectToProxy = (proxy: IProxy) => ConnectionStatus;
