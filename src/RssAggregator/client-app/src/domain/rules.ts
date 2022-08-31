import {IArticle} from './index';

const articleComparer = (x: IArticle, y: IArticle) => x.pubDate.getTime() - y.pubDate.getTime();

export {articleComparer};
