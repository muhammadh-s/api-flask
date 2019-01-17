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

  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/')
      .then(response => response.json())
      .then(todoList => {this.setState({ todos: todoList})});
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

  onChange = (event) => {
    this.setState({insertField: event.target.value});
  }

  onSubmit = (event) => {
    // let newTodo = [this.state.todos];
    const newTodo = Object.assign(
      this.state.todos, +1,
      Object.assign(
        {task : this.state.insertField}
      )
    )

    !this.state.insertField.length ?
    this.notify("The text box cannot be left blank", 'warning')
    :
    // newTodo.create({task: this.state.insertField});

    this.setState({ todos: newTodo});

    fetch('http://127.0.0.1:5000/', {
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

  }


  render() {
    const { todos } = this.state;

    return !Object.keys(todos).length ?
    <div className = 'flex flex-column items-center'>
    <h1>This app is waiting for an API connection</h1>
    <h1>Please refresh the page or press CTRL/CMD + R after few seconds</h1>
    <h1>Thank you.</h1>
    </div>
    :
      (
        <div className='tc'>
          <img alt = "" src={ require('../logo.png') } />
           <InsertBox handleChange={this.onChange}/>
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
        </div>
      );
  }
}

export default App;
