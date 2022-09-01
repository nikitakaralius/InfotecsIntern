import React from 'react';
import {useTypedSelector} from '../../hooks';
import {Stream} from './stream/Stream';
import styles from './StreamList.module.scss';

const StreamList = () => {
  const {storage} = useTypedSelector(state => state.stream);

  if (storage.streams.length == 0)
    return null;

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        FEEDS
      </div>
      <div className={styles.list}>
        {
          storage.streams.map(s => <Stream content={s} key={s.link}/>)
        }
      </div>
    </div>
  );
};

export {StreamList}
