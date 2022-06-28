import './BtnSwitchTheme.css';
import React from 'react';
import PropTypes from 'prop-types';
import { CurrentThemeContext } from '../../context/CurrentThemeContext';

function BtnSwitchTheme({ setTheme, hStyle }) {
  const theme = React.useContext(CurrentThemeContext);

  const handlerBtnClick = () => {
    const getCurrentThemeValue = (theme === 'day' ? 'night' : 'day');
    setTheme(getCurrentThemeValue);
  };

  return (
    <button 
      type='button'
      style={hStyle}
      className={`btn-switch-theme btn-switch-theme_theme-${theme}`}
      onClick={handlerBtnClick}
    />
  );
}

BtnSwitchTheme.propTypes = {
  setTheme: PropTypes.func,
  hStyle: PropTypes.object,
};

export default BtnSwitchTheme;