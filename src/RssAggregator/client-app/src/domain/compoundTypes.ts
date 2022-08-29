import {String50, String100} from './simpleTypes';

export interface IFeedItem {
  title: String50;
  description: String100;
  link: URL;
  pubDate: Date;
}
