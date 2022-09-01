import React from 'react';
import {Modal} from '../../modal';
import {IPrimitiveArticle} from '../../../domain';
import styles from './ArticleModal.module.scss';

interface IArticleModalProps {
  article: IPrimitiveArticle | undefined;
  open: boolean;
  onClose: () => void;
}

const ArticleModal = ({article, onClose, open}: IArticleModalProps) => {
  if (article === undefined) return null;

  return (
    <Modal open={open}>
      <div className={styles.container}>
        <div className={styles.title}>
          {article.title}
        </div>
        <div className={styles.date}>
          {article.pubDate}
        </div>
        <div className={styles.description}>
          {article.description}
        </div>
        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.backButton}>
            Go back
          </button>
          <a href={article.link} target="_blank" className={styles.readButton}>
            Read more
          </a>
        </div>
      </div>
    </Modal>
  );
};

export {ArticleModal};
