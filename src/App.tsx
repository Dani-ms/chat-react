import React from 'react';
import Home from './components/pages/home/home';
import './App.css';
import LoginPage from './components/pages/login/login-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppContext, appInitialState } from './logic/app-context';
import { Session } from 'inspector';

//import {AppContext} from './logic/app-context'

type Props = {}
&{session: any }


type State = { state: '',session?:[],isLoading:boolean,value:string, username: string}
class App extends React.Component<Props, State>{
 readonly state: State 
  constructor(props: Props){
    super(props);

    this.state = {
      session: {
        isLoading:false,
        token: undefined,
        login: this.login
      }
    }
  }

  login = (username:string) =>{
    fetch('http://localhost:3001/login').then(response => {
      if(response.ok){ return response.json()}
      else{ throw new Error()}
      })
      .then((data) =>{ this.setState({
        session:{...this.state.session, isLoading:false, token:data.token}
        })
      })
      .catch(() => {
        this.setState({ session: {...this.state.session, isLoading:false}});
      })
  }
  render(){
    return(
     
      <div className="App">
      
      <BrowserRouter>
     <AppContext.Provider value={this.state}>
     
     
      <Switch>

      <Route path="/login" exact component={LoginPage}></Route>
      <Route path="/home" exact component={Home}></Route>
     
      
      </Switch>
    </AppContext.Provider>
      </BrowserRouter>
       
      </div>
      
    );
  }
 
}
export default App;
