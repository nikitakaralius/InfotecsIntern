import {useTypedDispatch, useTypedSelector} from './redux';
import {useEffect} from 'react';
import {fetchFeed} from '../store';

const useFeed = () => {
  const {storage} = useTypedSelector(state => state.stream);
  const {proxy} = useTypedSelector(state => state.settings.storage);
  const {articles} = useTypedSelector(state => state.feed);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchFeed(storage.getSource(), proxy));
  }, []);

  return articles;
};

export {useFeed};
