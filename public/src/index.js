import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-infinite-calendar/styles.css';
import './index.scss';

// render app
render(
  <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
