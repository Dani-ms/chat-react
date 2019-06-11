import React from 'react';
import {ChangeEvent, Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import home from '../home/home';
//import Button from '@material-ui/core/Button';

type Props = {}
type State = { value: string, redirect:boolean}

class LoginPage extends Component<Props,State>{
    state = {
        value: '',
        redirect: false
       
    }
    
   // handleClick  = () =>{
  //     this.setState({redirect:true})
  // };
    onSubmit = (e:ChangeEvent<HTMLButtonElement>) =>{
   if(this.state.redirect){
           return <Redirect to='/home'></Redirect>
        }
   }
    onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
            this.setState({value: e.target.value});
    }
    



    render(){
      return(
       <Router>
           <div className="Login">
           <h1>Login for Chat</h1>
        
        <input type="text" value={this.state.value} onChange={this.onChange} placeholder="nome"></input>
        
        <button onSubmit={this.onSubmit} value="submit" color="primary">Entrar</button>
        
         <p> <Link to="/home">Home</Link> </p> 
      
         
            
         
          
          
        
         <Route exact path="/home" component={home} />
       
        </div>

            
       </Router>
        
      );
    }
   
  }

  export default(LoginPage)