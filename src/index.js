import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
  theme: {
    // colors: {...}, // optional
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    // colors: {...}, // optional
  },
});


const Main = () => {
  const [isDark , setIsDark] = React.useState(false);

  React.useEffect(() => {
    const theme = window.localStorage.getItem("data-theme");
    if (theme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  return (
    <NextThemesProvider  
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className,
    }}>
  <NextUIProvider theme={isDark ? darkTheme : lightTheme} disableBaseline={true}>
    <App />
   </NextUIProvider>
    </NextThemesProvider>
    
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      dark: darkTheme.className,
      light: lightTheme.className,
    }}
  >
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </NextThemesProvider> */}

  <Main />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
