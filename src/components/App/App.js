import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { CurrentThemeContext, defaultTheme} from '../../context/CurrentThemeContext';

function App() {
  const [theme, setTheme] = React.useState(localStorage.getItem('color-theme') || defaultTheme);

  React.useEffect(() => {
    localStorage.setItem('color-theme', theme);
    document.documentElement.setAttribute('theme-color', theme);
  }, [theme])

  return (
    <>
      <CurrentThemeContext.Provider value={theme}>
        <Header
          setTheme={setTheme}
        />
        <Main 
          
        />
      </CurrentThemeContext.Provider>
    </>
  );
}

export default App;