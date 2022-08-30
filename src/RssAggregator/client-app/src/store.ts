import {IActiveFeedStream, IFeedStream} from './domain/compoundTypes';
import {String80} from './domain/simpleTypes';

export const streams: IFeedStream[] = [
  {
    title: String80.createClamped('Habr'),
    link: new URL('https://habr.com/ru/rss/interesting/'),
    active: true
  },
  {
    title: String80.createClamped('Hexlet'),
    link: new URL('https://ru.hexlet.io/lessons.rss'),
    active: false
  }
]

const activeStreams = (stream: IFeedStream): stream is IActiveFeedStream => {
  return stream.active;
}

export const feedSource = streams.filter(activeStreams)
