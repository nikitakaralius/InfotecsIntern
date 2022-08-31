import {useEffect} from 'react';
import {useTypedDispatch} from './redux';
import {INewFeedStream, IProxy} from '../domain';
import {addProxy, appendStream, changeUpdateRate} from '../store';

const useConfig = () => {

  const dispatch = useTypedDispatch();

  useEffect(() => {
    fetch('/config.json')
      .then(r => r.json())
      .then(obj => {
        const proxy: IProxy = obj.proxy ?? null;
        const updateRate: number = obj.updateRateInSeconds;
        const stream: INewFeedStream = {
          link: obj.defaultFeed
        };
        dispatch(appendStream(stream, proxy));
        dispatch(changeUpdateRate(updateRate));
        if (proxy === null) return;
        dispatch(addProxy(proxy))
      });
  }, []);
};

export {useConfig}
