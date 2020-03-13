import React from 'react';
import './App.css';
import Stories from './Stories';
const App = ({ stories, onArchive }) => (
  <div className='app'>
    <Stories />
  </div>
);
export default App;
