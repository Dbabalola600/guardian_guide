import React, { useEffect, useState } from 'react';
import { ThemeContext, themes } from './colours';
import { SecureStorage } from '../../storage/secureStorage';
import { useIsFocused } from '@react-navigation/native';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  // const isFocused = useIsFocused()

  const init = async () => {
    console.log("themse")
    const isCurrent = await SecureStorage.getInst().getValueFor("theme")
    console.log("theme",isCurrent)
    if (isCurrent === null || isCurrent === "") {
      setTheme(themes.light)
    } else {
      const newTheme = isCurrent === "light" ? themes.light : themes.dark

      setTheme(newTheme)
    }
  }


  useEffect(() => {

    console.log("running")
    init();
  }, [])

  const toggleTheme = async () => {


    // setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    await SecureStorage.getInst().save("theme", newTheme === themes.light ? "light" : "dark");
  };



  const currentTheme = theme === themes.light ? 'light' : 'dark';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};