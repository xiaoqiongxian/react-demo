import React from 'react';
import {view as AppHeader} from '../components/AppHeader';
import {view as LeftMenu} from '../components/LeftMenu';
import './App.css';


const App = ({children}) => {
  return (
  	<div className="app">
	  	<AppHeader />
	    <div className="main">
	      	<LeftMenu />
	      	<div className="right-container">{children}</div>
	    </div>
    </div>
  );
};

export default App;
