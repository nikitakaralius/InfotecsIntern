import React from 'react';
import {IFeedStream} from '../../domain/compoundTypes';

interface IFeedStreamProps {
  stream: IFeedStream;
}

const FeedStream = ({stream}: IFeedStreamProps) => {
  return (
    <div>
      {stream.title.content}
    </div>
  );
};

export default FeedStream;
