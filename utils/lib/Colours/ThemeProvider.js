import React, { useState } from 'react';
import { ThemeContext, themes } from './colours';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
console.log(theme.backgroundColor)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
    
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};