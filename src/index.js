import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />, document.getElementById('root')
  </Provider>
);
