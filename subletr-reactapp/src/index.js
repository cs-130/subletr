import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ListingsProvider } from './context/ListingsProvider';
import { UserProvider } from './context/UserContext';
// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#064000',  
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <UserProvider>
      <ListingsProvider>
        <App />
      </ListingsProvider>
    </UserProvider>
  </ThemeProvider>
);
