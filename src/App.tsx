import React from 'react';
import { Provider } from 'react-redux'
import Home from './components/home/home';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <Provider>
      <Home/>
      </Provider>
    )
  }
 
}
export default App;
