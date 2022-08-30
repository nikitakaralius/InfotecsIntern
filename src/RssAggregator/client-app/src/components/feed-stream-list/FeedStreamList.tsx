import React from 'react';
import styles from './FeedStreamList.module.scss';
import {IFeedStream} from '../../domain/compoundTypes';
import FeedStream from '../feed-stream/FeedStream';

interface IFeedStreamListProps {
  streams: IFeedStream[];
}

const FeedStreamList = ({streams}: IFeedStreamListProps) => {
  return (
    <div>
      <div className={styles.container}>
        {
          streams.map((s, i) => <FeedStream stream={s} key={i} />)
        }
      </div>
    </div>
  );
};

export default FeedStreamList;
