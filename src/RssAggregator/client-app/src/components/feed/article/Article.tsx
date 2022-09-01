import React from 'react';
import {IPrimitiveArticle} from '../../../domain';
import styles from './Article.module.scss';

interface IArticleProps {
  content: IPrimitiveArticle;
  onExploreClick: (article: IPrimitiveArticle) => void;
}

const Article = ({content, onExploreClick}: IArticleProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <a href={content.link} target="_blank" className={styles.link}>
          {content.title}
        </a>
        <div className={styles.date}>{content.pubDate}</div>
      </div>
    </div>
  );
};

export {Article};
