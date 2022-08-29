import React from 'react';
import Header from '../header/Header';
import Feed from '../feed/Feed';
import FeedStreamList from '../feed-streams/FeedStreamList';

const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Feed />
        <FeedStreamList />
      </div>
    </div>
  );
};

export default App;
