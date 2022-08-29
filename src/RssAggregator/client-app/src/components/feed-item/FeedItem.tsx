import React from 'react';
import {IFeedItem} from '../../domain/compoundTypes';

interface IFeedItemProps {
  item: IFeedItem;
}

const FeedItem = ({item}: IFeedItemProps) => {
  return (
    <div>
      {item.title.content}
    </div>
  );
};

export default FeedItem;

