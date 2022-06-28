import React from 'react';
const CurrentThemeContext = React.createContext();
//  проверяем какая тема стоит на ОС
const isNightTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isNightTheme ? 'night' : 'day';

export  {
  CurrentThemeContext, 
  defaultTheme,
};