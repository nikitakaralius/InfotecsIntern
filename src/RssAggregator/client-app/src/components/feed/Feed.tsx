import React from 'react';
import {useFeed} from '../../hooks';
import {Article} from './article/Article';

const Feed = () => {
  const {articles} = useFeed();

  return (
    <div>
      {
        articles.content.map(a => <Article content={a} key={a.link}/>)
      }
    </div>
  );
};

export {Feed}
