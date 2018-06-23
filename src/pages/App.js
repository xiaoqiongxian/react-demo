import React from 'react';
import {view as TopMenu} from '../components/TopMenu';
import './App.css'
const App = ({children}) => {
  return (
    <div className='app'>
    	<div className='app-menu'><TopMenu /></div>
      	<div className='app-main'>{children}</div>
    </div>
  );
};

export default App;
