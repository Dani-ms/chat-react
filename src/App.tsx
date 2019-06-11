import React from 'react';
//import Home from './components/pages/home/home';
import './App.css';
import LoginPage from './components/pages/login/login-page';
//import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
     
      <div className="App">
        <div>
        <LoginPage/>
      </div>
        
       
      </div>
      
    );
  }
 
}
export default App;
