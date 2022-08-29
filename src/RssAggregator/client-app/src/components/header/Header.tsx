import React from 'react';
import styles from './Header.module.scss';

interface IHeaderProps {

}

const Header = (props: IHeaderProps) => {
  return (
    <div className={styles.container}>
      Header
    </div>
  );
};

export default Header;
