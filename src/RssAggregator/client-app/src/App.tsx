import React from 'react';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';
import FeedStreamList from './components/feed-streams/FeedStreamList';
import './index.css';

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
