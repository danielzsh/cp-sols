import React from 'react';
import styles from './header.module.css';

export const Header = ({ pageName } : { pageName : string }) => (
  <header>
    <div className={styles.wrapper}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img width="32" height="32" src="/invert_santa.png" style={{borderRadius: '50%'}} />
        <h1>{ pageName }</h1>
      </div>
    </div>
  </header>
);