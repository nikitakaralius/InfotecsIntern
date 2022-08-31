import React, {useState} from 'react';
import {useTypedDispatch, useTypedSelector} from '../../../hooks';
import {INewFeedStream} from '../../../domain';
import {appendStream} from '../../../store';

const RssForm = () => {
  const [link, setLink] = useState('');
  const {proxy} = useTypedSelector(state => state.settings.storage);
  const dispatch = useTypedDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stream: INewFeedStream = {
      link: link
    }
    dispatch(appendStream(stream, proxy))
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="url"
        placeholder="RSS Link"
        onChange={i => setLink(i.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export {RssForm};
