import React from 'react';
import styles from './Layout.module.scss';

const Layout = (props) => {
  const { child } = props
  return (
    <div className={styles.layout__wrapper}>
      <div className={styles.layout__content}>{child[0]}</div>
      <div className={styles.layout__side}>
        <div className={styles.layout__side__title}>{child[1]}</div>
        <div>{child[2]}</div>
        <div>{child[3]}</div>
      </div>
    </div>
  );
};

export default Layout;