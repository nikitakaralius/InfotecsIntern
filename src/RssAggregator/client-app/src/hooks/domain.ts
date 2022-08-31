import {useTypedDispatch, useTypedSelector} from './redux';
import {useEffect} from 'react';
import {fetchFeed} from '../store';

const useFeed = () => {
  const {storage} = useTypedSelector(state => state.stream);
  const {proxy, updateStepSeconds} = useTypedSelector(state => state.settings.storage);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchFeed(storage.source, proxy));
  }, []);

  useEffect(() => {
    const update = setInterval(() => {
      dispatch(fetchFeed(storage.source, proxy));
    }, updateStepSeconds * 1000)

    return () => clearInterval(update);

  }, [storage.source]);

  return useTypedSelector(state => state.feed);
};

export {useFeed};
