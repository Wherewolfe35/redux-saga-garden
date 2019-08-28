import React from 'react';
import Garden from './components/Garden/Garden';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1e6026',
      dark: '#003500'
    },
    secondary: {
      main: '#ffa733',
      dark: '#a42d00'
    }
  }
})

const App = () => (
  <div className="App">
    <MuiThemeProvider theme={theme}>
      <Container>
        <header className="App-header">
          <h1>Welcome to Saga Garden!</h1>
        </header>
      </Container>
      <Garden />
    </MuiThemeProvider>
  </div>
);

export default App;
