import React from 'react';
import {Modal} from '../../modal';
import {IPrimitiveArticle} from '../../../domain';
import {Button} from '@chakra-ui/react';
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
        <div>{article.title}</div>
        <div>{article.pubDate}</div>
        <div>{article.description}</div>
        <div>
          <button onClick={onClose}>Go back</button>
          <Button>Read more</Button>
        </div>
      </div>
    </Modal>
  );
};

export {ArticleModal};
