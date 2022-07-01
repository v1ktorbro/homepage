import './Main.css';
import React from "react";
import PropTypes from 'prop-types';
import CurrentDataInfoContext from '../../context/CurrentDataInfoContext';
import PortfolioContainer from '../PortfolioContainer/PortfolioContainer';
import EducationContainer from '../EducationContainer/EducationContainer';
import ContactsContainer from '../ContactsContainer/ContactsContainer';
import BtnSwitchTheme from '../BtnSwitchTheme/BtnSwitchTheme';
import { CurrentThemeContext } from '../../context/CurrentThemeContext';

function Main({ setTheme }) {
  const pageDataInfo = React.useContext(CurrentDataInfoContext);
  const theme = React.useContext(CurrentThemeContext);

  return (
    <main className={`main main_theme-${theme}`}>
      <div className='main__block-title'>
        <h1 className='main__title'>{pageDataInfo.name}</h1>
        <BtnSwitchTheme setTheme={setTheme} />
      </div>
      <h2 className={`main__subtitle main__subtitle_profession`}>{pageDataInfo.profession.toLowerCase()}</h2>
      <h2 className={`main__subtitle main__subtitle_stack`}>
        Stack:&nbsp;<span className='main__subtitle-text-elem'>{pageDataInfo.stack}</span>
      </h2>
      <PortfolioContainer />
      <EducationContainer />
      <ContactsContainer />
    </main>
  );
}

Main.propTypes = {
  setTheme: PropTypes.func,
};

export default Main;