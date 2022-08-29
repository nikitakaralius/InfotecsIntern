import React from 'react';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';
import FeedStreamList from './components/feed-streams/FeedStreamList';

const App = () => {
  return (
    <div>
      <Header />
      <Feed />
      <FeedStreamList />
    </div>
  );
};

export default App;
