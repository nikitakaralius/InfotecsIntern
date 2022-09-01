export {String100, String250} from './simpleTypes';
export {SortedFeed, StreamStorage} from './compoundTypes';
export {articleComparer, activeStreamFilter, streamEquality} from './rules';
export type {
  IProxy,
  IArticle,
  FeedStream,
  FeedSource,
  IEnabledFeedStream,
  IDisabledFeedStream,
  INewFeedStream,
  ISettingsStorage
} from './compoundTypes';
export type {IPrimitiveStreamStorage, IPrimitiveSortedFeed, IPrimitiveArticle} from './primitives';
export {
  castToSortedFeed,
  castToStreamStorage,
  castToPrimitiveSortedFeed,
  castToPrimitiveStreamStorage
} from './primitives';
