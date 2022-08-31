import React from 'react'
import {Header} from '../header';
import {Feed} from '../feed';
import {StreamList} from '../streams';

const App = () => {
  return (
    <div>
      <Header />
      <Feed />
      <StreamList />
    </div>
  )
}

export default App;
