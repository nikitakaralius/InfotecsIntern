import {IArticle, String100, String250} from '../domain';

type MapArticle = (element: Element) => IArticle;

const mapArticle: MapArticle = (element) => {
  const title = element.querySelector('title')!.textContent!;
  const description = element.querySelector('description')!.textContent!;
  const pubDate = element.querySelector('pubDate')!.textContent!;
  const link = element.querySelector('link')!.textContent!;

  return {
    title: String100.createClamped(title),
    description: String250.createClamped(description),
    link: new URL(link),
    pubDate: new Date(pubDate)
  };
};

const createXmlTree = (content: string) => {
  const parser = new DOMParser();
  return parser.parseFromString(content, 'application/xml');
};

const parseFeed = (content: string) => {
  const tree = createXmlTree(content);
  try {
    const channel = tree.querySelector('channel')!;
    const articleList = channel.querySelectorAll('item')!;

    let feed: IArticle[] = [];
    articleList.forEach(a => feed.push(mapArticle(a)));

    return feed;
  } catch (e) {
    throw new Error('Unknown RSS dialect');
  }
};

const parseStreamTitle = (content: string) => {
  const tree = createXmlTree(content);
  try {
    const channel = tree.querySelector('channel')!;
    const title = channel.querySelector('title')!;
    return title.textContent!;
  } catch (e) {
    throw new Error('Unknown RSS dialect');
  }
};

export {parseFeed, parseStreamTitle};
