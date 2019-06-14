import React from 'react';

import {ChangeEvent, Component} from 'react';
import { Message } from '../../../logic/messages/types';
import { messageApi } from './../../../logic/messages/message-api';
import { MessageList } from './components/message-list';
import { AppContext } from '../../../logic/app-context';



type State = {
  messages?: Message[],
  input: string,
}
class Home extends Component<{}, State>{
  static contextType = AppContext;

    state: State = {
      input: "",
    };

    componentDidMount() {
      messageApi.on("mensagens", (messages: Message[]) => {
        console.log(messages)
        this.setState({
          messages
        });
      });
    }

    handleChange = ( e: ChangeEvent<HTMLTextAreaElement>) =>{
        e.preventDefault();
        
        this.setState({ input:e.currentTarget.value});
    };

    handleClick = () => {
      //console.log("Botão clicado");
      messageApi.emit("nova-mensagem",{
          nome: "Daniela",
          mensagem: this.state.input
      });

      this.setState({input:""})
    };
    render() {
        return (
          <div>
            <AppContext.Consumer>{this.context}</AppContext.Consumer>
            <h1>Chat Messages</h1>
           
            <div>
              {
                this.state.messages ?
                <MessageList messages={this.state.messages}/>
                : null
              }
            </div>
            <textarea onChange={this.handleChange} value={this.state.input}/>
            <div>
              <button onClick={this.handleClick} value="submit" color="primary">Enviar</button>
            </div>
          </div>
        );
      }
    }



export default Home
