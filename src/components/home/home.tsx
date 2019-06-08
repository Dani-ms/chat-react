import React, { Component, ChangeEvent, Dispatch } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

type Props = { }
& { dispatch: ThunkDispatch<undefined>}

class Home extends Component<Props>{

    handleChange = ( event: ChangeEvent<HTMLTextAreaElement>) =>{
        event.preventDefault();
        this.props.dispatch({value:event.currentTarget.value});
    }

    render() {
        return (
          <div>
            <textarea />
            <div>
              <button value="submit">Enviar</button>
            </div>
          </div>
        );
      }
    }



    export default connect (Home)