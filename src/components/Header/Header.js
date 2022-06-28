import './Header.css';
import React from 'react';
import PropTypes from 'prop-types'
import BtnSwitchTheme from '../BtnSwitchTheme/BtnSwitchTheme';

function Header({ setTheme }) {
  return (
    <header className='header'>
        <BtnSwitchTheme
          setTheme={setTheme}
        />
    </header>
  );
}

Header.propTypes = {
  setTheme: PropTypes.func,
};

export default Header;