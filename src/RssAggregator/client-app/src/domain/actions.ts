import {
  FeedSource,
  IActiveFeedStream, IFeedStream,
  IInactiveFeedStream,
  INewFeedStream,
  IProxy,
  SortedFeed
} from './compoundTypes';

import {
  ConnectionStatus, FetchError
} from './simpleTypes';

export type ConnectToProxy = (proxy: IProxy) => ConnectionStatus;

export type ResetProxy = () => ConnectionStatus;

export type FetchFeed = (source: FeedSource, proxy: IProxy | null) => Promise<[SortedFeed, FetchError]>;

export type AppendFeedStream = (stream: INewFeedStream) => FeedSource;

export type EnableFeedStream = (stream: IInactiveFeedStream) => FeedSource;

export type DisableFeedStream = (stream: IActiveFeedStream) => FeedSource;

export type RemoveFeedStream = (stream: IFeedStream) => FeedSource;
