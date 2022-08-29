import {
  ConnectionStatus,
  FeedSource,
  IActiveFeedStream, IFeedStream,
  IInactiveFeedStream,
  INewFeedStream,
  IProxy,
  SortedFeed
} from './compoundTypes';

export type connectToProxy = (proxy: IProxy) => ConnectionStatus;

export type resetProxy = () => ConnectionStatus;

export type fetchFeed = (source: FeedSource, proxy: IProxy | null) => SortedFeed;

export type appendFeedStream = (stream: INewFeedStream) => FeedSource;

export type enableFeedStream = (stream: IInactiveFeedStream) => FeedSource;

export type disableFeedStream = (stream: IActiveFeedStream) => FeedSource;

export type removeFeedStream = (stream: IFeedStream) => FeedSource;
