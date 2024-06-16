
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}


// Define the theme interface
interface Theme {
  backgroundColor: string;
  textColor: string;
  textColor2: string;
  primary: string;
  secondary: string;
  lightPrimary: string;
  backgroundAlt: string,
  whiteColor: string,
  lightGreen: string, 
    darkGreen: string

}