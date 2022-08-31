import React from 'react';
import {FeedStream} from '../../../domain';

interface IStreamProps {
  content: FeedStream;
}

const Stream = ({content}: IStreamProps) => {
  return (
    <div>
      {content.title}
    </div>
  );
};

export {Stream};
