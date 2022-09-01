import React from 'react';
import {IPrimitiveArticle} from '../../../domain';
import styles from './Article.module.scss';

interface IArticleProps {
  content: IPrimitiveArticle;
}

const Article = ({content}: IArticleProps) => {
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <a href={content.link} target="_blank" className={styles.link}>
          {content.title} <span className={styles.date}>{content.pubDate}</span>
        </a>
      </div>

      <button>Explore</button>

    </div>
  );
};

export {Article};
