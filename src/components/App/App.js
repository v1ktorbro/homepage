import './App.css';
import React from 'react';
import Main from '../Main/Main';
import { CurrentThemeContext, defaultTheme} from '../../context/CurrentThemeContext';
import CurrentDataInfoContext from '../../context/CurrentDataInfoContext';
import { dataInfo } from '../../utils/dataInfo';

function App() {
  const [theme, setTheme] = React.useState(localStorage.getItem('color-theme') || defaultTheme);
  const [pageDataInfo] = React.useState(dataInfo['en']);

  React.useEffect(() => {
    localStorage.setItem('color-theme', theme);
    document.documentElement.setAttribute('theme-color', theme);
  }, [theme])

  return (
    <>
      <CurrentThemeContext.Provider value={theme}>
      <CurrentDataInfoContext.Provider value={pageDataInfo}>
        <Main setTheme={setTheme} />
      </CurrentDataInfoContext.Provider>
      </CurrentThemeContext.Provider>
    </>
  );
}

export default App;