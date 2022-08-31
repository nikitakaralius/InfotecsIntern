import React from 'react';
import {RssForm} from './rssForm/RssForm';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>

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
