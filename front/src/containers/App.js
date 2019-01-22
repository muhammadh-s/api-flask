import React, { Component } from 'react';
import CardList from '../components/CardList';
import InsertBox from '../components/InsertBox';
import SubmitButton from '../components/SubmitButton';
import './App.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      insertField: '',
    }
    this.handleApiErrors = this.handleApiErrors.bind(this);

  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/todos')
    .then(this.handleApiErrors)
    .catch(error => this.notify("Could not connect to network", 'error') )
    .then(response => response.json())
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

    let newTodo = {
      'id' : this.state.todos.id + 1,
      'task' : this.state.insertField,
    }
    if (this.state.insertField.length === 0)
      this.notify("The text box cannot be left blank", 'error')
    else if (check === true)
      this.notify("The same note has already been added", 'error')
    else
      fetch('http://127.0.0.1:5000/todo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          task: this.state.insertField,
        })
      })
      .then(this.handleApiErrors)
      .then(response => this.setState(prevState => ({
        todos: [...prevState.todos, newTodo]
      })) )
      .catch(error => this.notify("Could not connect to network", 'error') );

      this.setState({insertField: ''});

  }


  render() {
    const { todos } = this.state;

    return (
        <div className='tc'>
          <img alt = "Logo" src={ require('../logo.png') } />
          <InsertBox
             handleChange= {this.onChange}
             value= {this.state.insertField}
             enter= {this.onEnterPress}
           />
          <SubmitButton handleSubmit={this.onSubmit}/>
          <CardList todos={ todos } />
          <ToastContainer position="top-right"
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
          <span id="forkongithub">
          <a href="https://github.com/">
          Fork This App on GitHub</a>
          </span>
        </div>
      )
  }
}

export default App;
