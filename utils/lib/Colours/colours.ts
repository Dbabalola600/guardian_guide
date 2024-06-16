import React, { createContext, useState, useContext, ReactNode } from 'react';





// Define the themes
export const themes: { light: Theme; dark: Theme } = {
    light: {
        backgroundColor: '#FFFFFF',
        whiteColor:"#FFFFFF",
        textColor: '#333333',
        textColor2: "#777777",
        primary: "#3E6B99",
        secondary: "#7BB661",
        lightPrimary: "#6A9DD7",
        backgroundAlt: "#D4E0ED",
         lightGreen:"#EBFDF5B2", 
           darkGreen:"#7BB661"
    },
    dark: {
        backgroundColor: '#000000',
        textColor: '#333333',
        whiteColor:"#FFFFFF",
        primary: "#3E6B99",
        textColor2: "#777777",
        secondary: "#7BB661",
        lightPrimary: "#6A9DD7",
        backgroundAlt: "#D4E0ED",
         lightGreen:"#EBFDF5B2", 
           darkGreen:"#7BB661"
    },
};



export const palette = {
    backgroundColor: '#FFFFFF',
    backgroundAlt: "#D4E0ED",
    textColor: '#333333',
    textColor2: "#777777",
    primary: "#3E6B99",
    secondary: "#7BB661",
    lightPrimary: "#6A9DD7", 
    whiteColor:"#FFFFFF",
    whiteBg:"#F5F5F5", 
    lightGreen:"#EBFDF5B2", 
    darkGreen:"#7BB661"
}

// Create the context with a default value
export const ThemeContext = createContext<ThemeContextValue>({
    theme: themes.light,
    toggleTheme: () => { },
});

