import React from 'react';
import {useTypedSelector} from '../../hooks';
import {Stream} from './stream/Stream';
import styles from './StreamList.module.scss';

const StreamList = () => {
  const {storage} = useTypedSelector(state => state.stream);

  return (
    <div className={styles.container}>
      {
        storage.streams.map(s => <Stream content={s} key={s.link}/>)
      }
    </div>
  );
};

export {StreamList}
