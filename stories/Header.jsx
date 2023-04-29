import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import styles from './header.module.css';

export const Header = ({ pageName, user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className={styles.wrapper}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img width="32" height="32" src="/invert_santa.png" style={{borderRadius: '50%'}} />
        <h1>{ pageName }</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className={styles.welcome}>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  pageName: 'Home',
  user: null,
};
