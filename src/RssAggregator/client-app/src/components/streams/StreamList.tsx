import React from 'react';
import {useTypedSelector} from '../../hooks';
import {Stream} from './stream/Stream';

const StreamList = () => {
  const {storage} = useTypedSelector(state => state.stream);

  return (
    <div>
      {
        storage.streams.map(s => <Stream content={s} key={s.link}/>)
      }
    </div>
  );
};

export {StreamList}
