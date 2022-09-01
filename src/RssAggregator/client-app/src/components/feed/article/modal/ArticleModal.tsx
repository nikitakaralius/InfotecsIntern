import React from 'react';
import styles from './ArticleModal.module.scss';
import {IPrimitiveArticle} from '../../../../domain';

interface IArticleModalProps {
  article: IPrimitiveArticle;
  show: boolean;
}

const ArticleModal = ({article, show}: IArticleModalProps) => {
  if (!show)
    return <div></div>

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {article.description}
      </div>
    </div>
  );
};

export {ArticleModal}
