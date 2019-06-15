import React from 'react';
import Home from './components/pages/home/home';
import './App.css';
import LoginPage from './components/pages/login/login-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppContext} from './logic/app-context';



type Props = { }

type State = {
  session:{
    isLoading: boolean,
    token?: string,
    login: (login:string) => void,
  }
}

//type AppContext<T> = { value:<{ session: { isLoading: boolean; token: undefined; }; }>}

class App extends React.Component<Props, State >{
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
    fetch('http://localhost:3000/home').then(response => {
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
      <AppContext.Provider value={this.state}>
      <BrowserRouter>
     
     
     
      <Switch>

      <Route path="/login" exact component={LoginPage}></Route>
      <Route path="/" exact component={Home}></Route>
     
      
      </Switch>
      </BrowserRouter>
    </AppContext.Provider>
       
      </div>
      
    );
  }
 
}
export default App;
