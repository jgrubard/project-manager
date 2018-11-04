import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import store from '../redux';

const root = document.getElementById('root');

const AppLoad = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(AppLoad, root);