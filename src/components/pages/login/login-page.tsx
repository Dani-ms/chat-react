import React from 'react';
import { ChangeEvent, Component, MouseEvent } from 'react';
import {Redirect} from 'react-router-dom';

import {AppContext} from './../../../logic/app-context';
import FormLogin from './components/form-login';



type Props = {}
type State = { value: string, username: string}

class LoginPage extends Component<Props,State>{
    static contextType = AppContext;
    state = {
        value: '',
        username: '',
        redirect: false
       
    }

    constructor(props:Props){
        super(props);

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onLogin = this.onLogin.bind(this);

     
    }
   
    onUsernameChange = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({username: e.currentTarget.value})
    }

    onLogin = (e:MouseEvent<HTMLButtonElement>) =>{
       
       this.context.session.login(this.state.username)
      
    }

  
    onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
            this.setState({value: e.target.value});
    }
    



    render(){
      return(
        this.context.session.token ?
        <Redirect to="/" /> :
        <div style={{paddingTop: '30px'}}>
          {this.context.session.isLoading ? 'Loading' :
           <FormLogin
            username={this.state.username}
            onUsernameChange={this.onUsernameChange}
            onLogin={this.onLogin}
          />}
        </div>
        
      );
    }
   
  }

  export default LoginPage