import React from 'react';
import {RssForm} from './rssForm/RssForm';

const Header = () => {
  return (
    <header>

      <div>
        RSS Aggregator
      </div>

      <RssForm />

      <div>
        Example: https://habr/ru/rss/interesting
      </div>

    </header>
  );
};

export {Header}
