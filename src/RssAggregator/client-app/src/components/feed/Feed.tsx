import React, {useState} from 'react';
import {useFeed, useScrollLock} from '../../hooks';
import {Article} from './article/Article';
import styles from './Feed.module.scss';
import {IPrimitiveArticle} from '../../domain';
import {ArticleModal} from './modal/ArticleModal';

const Feed = () => {
  const {articles} = useFeed();
  const [isOpen, setIsOpen] = useState(false);
  const [article, setArticle] = useState<IPrimitiveArticle>();
  const {lockScroll, unlockScroll} = useScrollLock();

  const onExploreClick = (a: IPrimitiveArticle) => {
    setIsOpen(true);
    setArticle(a);
    lockScroll();
  }

  const closeModal = () => {
    unlockScroll();
    setIsOpen(false);
  }

  if (articles.content.length == 0)
    return null;

  return (
    <div className={styles.container}>
      <ArticleModal article={article} open={isOpen} onClose={closeModal} />
      <div className={styles.heading}>
        POSTS
      </div>
      <div className={styles.list}>
        {
          articles.content.map(a =>
            <Article content={a} key={a.link} onExploreClick={onExploreClick}/>)
        }
      </div>
    </div>
  );
};

export {Feed}
