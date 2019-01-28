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

const API = ('https://todo-flask-restful-api.herokuapp.com/todos');

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      insertField: '',
      color: 'yellow',
      fetchInProgress: false,
    }
    this.handleApiErrors = this.handleApiErrors.bind(this);
  }

  componentDidMount() {
    fetch(API)
    .then(this.setState({fetchInProgress: true}))
    .then(this.handleApiErrors)
    .catch(error => this.notify(
      "Could not connect to network",'error'))
    .then(response => response.json())
    .then(this.setState({fetchInProgress: false}))
    .then(todoList => {this.setState({ todos: todoList.todos})});
  }

  notify = (message, type) => {
    switch (type){
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

  handleApiErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }

  onChange = (event) => {
    this.setState({insertField: event.target.value});
  }

  onEnterPress = (event) => {
  if(event.keyCode === 13 && event.shiftKey === false) {
    event.preventDefault();
    this.onSubmit();
  }
}

  onSubmit = (event) => {
    const check = this.state.todos.some(
      todo => todo.task === this.state.insertField
    );

    let idN = Math.max.apply(Math,
      this.state.todos.map(
      function(o) {
        return o.id;
      }
    ))
    if (idN === -Infinity){idN = 0}

    let newTodo = {
      'id' : idN + 1,
      'task' : this.state.insertField,
      'color' : this.state.color
    }
    if (this.state.insertField.length === 0)
      this.notify(
        "The text box cannot be left blank",
        'error'
      )
    else if (check === true)
      this.notify(
        "The same note has already been added",
        'error'
      )
    else
      fetch(API, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          task: this.state.insertField,
          color: this.state.color,
        })
      })
      .then(this.handleApiErrors)
      .then(response => this.setState(prevState => ({
        todos: [...prevState.todos, newTodo]
      })) )
      .catch(error => this.notify(
        "Could not connect to network",
        'error')
      );

      this.setState({insertField: ''});
  }

  setColor = (event) => {
    this.setState({color: event.target.value})
  }

  onDelete = (event) => {
    let idN = +event.target.id
    let todos = this.state.todos.filter(
      todo => todo.id !== idN
    )
    fetch(API, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        id: idN,
      })
    })
    this.setState({todos: todos})
  }

  render() {
    const { todos } = this.state;

    return (
      this.state.fetchInProgress ?
      <Spinner/>
      :
        <div className='tc'>
          <img
            src= { Logo }
            alt = "Logo"
          />
          <InsertBox
             handleChange= {this.onChange}
             value= {this.state.insertField}
             enter= {this.onEnterPress}
           />
           <Color color = {this.setColor}/>
          <SubmitButton handleSubmit={this.onSubmit}/>
          <CardList
            todos={ todos }
            del = { this.onDelete }
          />
          <ToastContainer
            position="top-right"
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
          <ForkGithub link = {
            'https://github.com/muhammadh-s/todo-app'
          }/>
        </div>
      )
  }
}

export default App;
