import React, {useState} from 'react';
import {useFeed} from '../../hooks';
import {Article} from './article/Article';
import styles from './Feed.module.scss';
import {ArticleModal} from './article/modal/ArticleModal';
import {IPrimitiveArticle} from '../../domain';

const Feed = () => {
  const {articles} = useFeed();

  const [modal, setModal] = useState(false);
  const [article, setArticle] = useState<IPrimitiveArticle>();

  const openModal = (article: IPrimitiveArticle) => {
      setArticle(article);
      setModal(true);
  }

  if (articles.content.length == 0)
    return <div></div>

  return (
    <div className={styles.container}>
      <ArticleModal article={article!} show={modal} />
      <div className={styles.heading}>
        Feed
      </div>
      <div className={styles.list}>
        {
          articles.content.map(a =>
            <Article content={a} openModal={openModal} key={a.link}/>)
        }
      </div>
    </div>
  );
};

export {Feed}
