import {IFeedItem} from './compoundTypes';
import {String100, String80} from './simpleTypes';

const mapItem: (item: Element) => IFeedItem = (item) => {
  const title = item.querySelector('title')!.textContent!;
  const description = item.querySelector('description')!.textContent!;
  const pubDate = item.querySelector('pubDate')!.textContent!;
  const link = item.querySelector('link')!.textContent!;

  return {
    title: String80.createClamped(title),
    description: String100.createClamped(description),
    link: new URL(link),
    pubDate: new Date(pubDate)
  };
};

const createXmlTree = (content: string) => {
  const parser = new DOMParser();
  return parser.parseFromString(content, 'application/xml');
}

const parseFeed = (content: string) => {
  const tree = createXmlTree(content);
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

const parseStream = (content: string) => {
  const tree = createXmlTree(content);
  try {
    const channel = tree.querySelector('channel')!;
    const title = channel.querySelector('title')!;
    return title.textContent!;
  } catch (e) {
    throw new Error('Unsupported rss dialect');
  }
}

export {parseFeed, parseStream}
