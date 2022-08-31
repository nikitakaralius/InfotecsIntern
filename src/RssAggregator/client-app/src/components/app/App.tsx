import React from 'react'
import {useFeed, useTypedDispatch} from '../../hooks';
import {INewFeedStream} from '../../domain';
import {appendStream} from '../../store';

const App = () => {

  const {content} = useFeed();
  const dispatch = useTypedDispatch();

  return (
    <div>
      <button onClick={() => {
        const stream: INewFeedStream = {
          link: 'https://habr.com/ru/rss/interesting/'
        }
        dispatch(appendStream(stream));
      }}>
        Add RSS
      </button>

      <div>
        {
          content.map(a => <div>{a.title}</div>)
        }
      </div>
    </div>
  )
}

export default App;
