import React, { Component } from 'react';
import { Message } from '../../../../logic/messages/types';

type Props = {
  messages: Message[]
}

type State = {}

export class MessageList extends Component<Props, State>{
  render() {
    console.log(this.props)
    return <ul>{
      this.props.messages.map((message, index) => (
        <li key={`MESSAGE_LIST${index}`}>
        <p>{message.mensagem}</p>
        </li>
      ))
    }</ul>;
  }
}

