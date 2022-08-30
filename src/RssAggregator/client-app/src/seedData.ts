import {FeedSource} from './domain/compoundTypes';
import {String80} from './domain/simpleTypes';

export const feedSource: FeedSource = [
  {
    title: String80.createClamped('Habr'),
    link: new URL('https://habr.com/ru/rss/interesting/')
  }
]
