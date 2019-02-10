import React, { Component } from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import CardList from '../components/CardList';
import InsertBox from '../components/InsertBox';
import SubmitButton from '../components/SubmitButton';
import ForkGithub from '../components/ForkGithub';
import Color from '../components/Color';
import Logo from '../logo.png';
import Spinner from '../components/Spinner';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';
import io from 'socket.io-client';

const socket = io('wss://todo-api-websocket.herokuapp.com/');

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: false,
      insertField: '',
      color: 'yellow',
    }
  }
 
  componentDidMount() {
    socket.on('initial', (data) => {
      this.setState({ todos: data })
    });
    
    socket.on('message', (data) => {
      this.setState({ todos: data })
    });
  }

  notify = (message, type) => {
    switch (type) {
      case 'error':
        toast.error(message);
        break;
      case 'success':
        toast.success(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      default:
        toast(message)
    }
  }

  onChange = (event) => {
    this.setState({ insertField: event.target.value });
  }

  onEnterPress = (event) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      this.onSubmit();
    }
  }

  onSubmit = () => {
    const { insertField, color } = this.state;
    if (insertField.length === 0)
      this.notify(
        "The text box cannot be left blank",
        'error'
      )
    else
    socket.send(insertField, color);

    this.setState({ insertField: '' });
  }

  setColor = (event) => {
    this.setState({ color: event.target.value })
  }

  onDelete = (event) => {
    let id = +event.target.id
    socket.emit('delete', id);
    socket.on('delete', (data) => {
      this.setState({ todos: data })
    });
  }

  render() {
    const { todos } = this.state;

    return (
      this.state.todos
      ?
        <div className='tc'>
          <img
            src={Logo}
            alt="Logo"
          />
          <InsertBox
            handleChange={this.onChange}
            value={this.state.insertField}
            enter={this.onEnterPress}
          />
          <Color color={this.setColor} />
          <SubmitButton handleSubmit={this.onSubmit} />
          <CardList
            todos={todos}
            del={this.onDelete}
          />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover={false}
            transition={Flip}
          />
          <ForkGithub link={
            'https://github.com/muhammadh-s/todo-app'
          } />
        </div>
        :
        <Spinner />
        
    )
  }
}

export default App;
