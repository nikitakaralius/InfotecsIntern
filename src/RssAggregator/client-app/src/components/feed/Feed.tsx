import React, {useState} from 'react';
import {useFeed, useScrollLock} from '../../hooks';
import {Article} from './article/Article';
import styles from './Feed.module.scss';
import Modal from '../modal/Modal';
import {IPrimitiveArticle} from '../../domain';

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

  if (articles.content.length == 0)
    return null;

  return (
    <div className={styles.container}>
      <Modal open={isOpen}>
        {article?.title}
        <div>
          <button onClick={() => {
            unlockScroll();
            setIsOpen(false);
          }}>Close</button>
        </div>
      </Modal>
      <div className={styles.heading}>
        Feed
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
