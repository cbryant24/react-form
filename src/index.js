import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ThemeProvider, { GlobalStyle} from './components/ThemeProvider';
import theme from './components/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <App/>
  </ThemeProvider>,
  document.getElementById('root')
);
