import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './app/config/store';

import App from './app';

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>,
  document.getElementById('root')
);

//TODO: agregar Provider
