import React from 'react';
import {IPrimitiveArticle} from '../../../domain';

interface IArticleProps {
  content: IPrimitiveArticle;
}

const Article = ({content}: IArticleProps) => {
  return (
    <div>
      {content.title}
    </div>
  );
};

export {Article};
