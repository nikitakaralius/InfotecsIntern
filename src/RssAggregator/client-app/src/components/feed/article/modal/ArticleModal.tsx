import React from 'react';
import styles from './ArticleModal.module.scss';
import {IPrimitiveArticle} from '../../../../domain';

interface IArticleModalProps {
  article: IPrimitiveArticle;
  show: boolean;
  hide: () => void;
}

const ArticleModal = ({article, show, hide}: IArticleModalProps) => {
  if (!show)
    return <div></div>

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>{article.title}</div>
        <div>{article.pubDate}</div>
        <div>{article.description}</div>
        <div>
          <button onClick={hide}>Go back</button>
          <a href={article.link} target="_blank">Read</a>
        </div>
      </div>
    </div>
  );
};

export {ArticleModal}
