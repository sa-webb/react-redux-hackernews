import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <App stories={store.getState().storyState} onArchive={() => {}} />,
  document.getElementById('root')
);
