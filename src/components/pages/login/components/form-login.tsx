import React, { MouseEvent, ChangeEvent }  from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

type Props = {
    onUsernameChange : (input: ChangeEvent<HTMLInputElement>) => void;
    onLogin : (event: MouseEvent<HTMLButtonElement>) => void; 
    username:string  
}
type State = { value: string, username: string}

export default class FormLogin extends React.Component<Props, State>{
  
     state = {
         value: '',
         username: ''

     }   
    render(){

        return(

        <div className="Login">
        <Container maxWidth="sm">
          <h1>Login for Chat</h1>
         
         <input type="text" onChange={this.props.onUsernameChange} value={this.props.username} placeholder="name"></input>
         <br/>
         <Button onClick={this.props.onLogin} value="submit" variant="contained" color="primary" >Entrar</Button>
         
         </Container>                
         </div>
         
        )
    }
}