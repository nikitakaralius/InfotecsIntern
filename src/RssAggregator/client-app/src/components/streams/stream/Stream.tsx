import React from 'react';
import {FeedStream} from '../../../domain';
import {useTypedDispatch} from '../../../hooks';
import {disableStream, enableStream, removeStream} from '../../../store';
import styles from './Stream.module.scss';

interface IStreamProps {
  content: FeedStream;
}

const Stream = ({content}: IStreamProps) => {

  const dispatch = useTypedDispatch();

  const changeStreamStatus = () => {
    if (content.active)
      dispatch(disableStream(content));
    else
      dispatch(enableStream(content));
  };

  const remove = () => {
    dispatch(removeStream(content));
  };

  return (
    <div className={styles.container}>
      <a href={content.link} target='_blank' className={styles.link}>
        {content.title}
      </a>
      <span
        className={content.active ? styles.enabled: styles.disabled}
        onClick={changeStreamStatus}
      >
        ⬤
      </span>
      <span className={styles.remove} onClick={remove}>
        ✗
      </span>
    </div>
  );
};

export {Stream};
