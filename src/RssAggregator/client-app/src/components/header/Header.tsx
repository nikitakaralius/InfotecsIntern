import React from 'react';
import {RssForm} from './rssForm/RssForm';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.mainArea}>
        <div className={styles.title}>
          RSS Aggregator
        </div>
        <RssForm />
        <div className={styles.example}>
          Example: https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml
        </div>
      </div>
    </header>
  );
};

export {Header}
