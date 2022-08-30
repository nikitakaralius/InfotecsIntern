import {IFeedItem} from './compoundTypes';
import {String100, String50} from './simpleTypes';

const mapItem: (item: Element) => IFeedItem = (item) => {
  const title = item.querySelector('title')!.textContent!;
  const description = item.querySelector('description')!.textContent!;
  const pubDate = item.querySelector('pubDate')!.textContent!;
  const link = item.querySelector('link')!.textContent!;

  return {
    title: String50.createClamped(title),
    description: String100.createClamped(description),
    link: new URL(link),
    pubDate: new Date(pubDate)
  };
};

export const parseRss = (content: string) => {
  const parser = new DOMParser();
  const tree = parser.parseFromString(content, 'application/xml');
  try {
    const channel = tree.querySelector('channel')!;
    const item = channel.querySelectorAll('item')!;

    let feed: IFeedItem[] = [];
    item.forEach(item => {
      const feedItem = mapItem(item);
      feed.push(feedItem);
    });

    return feed;
  } catch (e) {
    throw new Error('Unsupported rss dialect');
  }
};
