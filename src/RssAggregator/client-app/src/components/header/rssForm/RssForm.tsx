import React, {useState} from 'react';
import {useTypedDispatch, useTypedSelector} from '../../../hooks';
import {INewFeedStream} from '../../../domain';
import {appendStream} from '../../../store';
import styles from './RssForm.module.scss';

const RssForm = () => {
  const [link, setLink] = useState('');
  const {proxy} = useTypedSelector(state => state.settings.storage);
  const dispatch = useTypedDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stream: INewFeedStream = {
      link: link
    };
    dispatch(appendStream(stream, proxy));
    setLink('');
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <input
        className={styles.input}
        type="url"
        placeholder="RSS Link"
        onChange={i => setLink(i.target.value)}
        value={link}
      />
      <input type="submit" value="Add" className={styles.submit}/>
    </form>
  );
};

export {RssForm};
