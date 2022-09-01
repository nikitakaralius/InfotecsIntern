import React from 'react';
import {FeedStream} from '../../../domain';
import {useTypedDispatch} from '../../../hooks';
import {disableStream, enableStream, removeStream} from '../../../store';

interface IStreamProps {
  content: FeedStream;
}

const Stream = ({content}: IStreamProps) => {

  const dispatch = useTypedDispatch();

  const setStreamStatus = () => {
    if (content.active)
      dispatch(disableStream(content));
    else
      dispatch(enableStream(content));
  };

  const remove = () => {
    dispatch(removeStream(content));
  }

  return (
    <div>
      {content.title}
      <button onClick={setStreamStatus}>
        {content.active ? 'Disable' : 'Enable'}
      </button>
      <button onClick={remove}>
        Remove
      </button>
    </div>
  );
};

export {Stream};
