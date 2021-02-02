import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux'

import { BrowserRouter as RouterProvider } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/App';
import configureStore from './store'
import ThemeProvider from './components/ThemeProvider';

const store = configureStore();

const ROOT = (
  <ReduxProvider store={store}>
    <RouterProvider>
      <ThemeProvider>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </RouterProvider>
  </ReduxProvider>
)

ReactDOM.render(ROOT, document.getElementById('root'));
