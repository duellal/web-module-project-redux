import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import reducers from './reducers/index';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { configure } from '@testing-library/react';

const store = configureStore({ reducer: reducers })

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
