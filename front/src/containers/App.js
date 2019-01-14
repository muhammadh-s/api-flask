import React, { Component } from 'react';
import CardList from '../components/CardList';
import InsertBox from '../components/InsertBox';
import SubmitButton from '../components/SubmitButton';
import './App.css';

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
      .then(response=> response.json())
      .then(todoList => {this.setState({ todos: todoList})});

  }

  onChange = (event) => {
    this.setState({insertField: event.target.value});
  }

  onSubmit = (event) => {
    !this.state.insertField.length ?
     console.log('field cannot be empty')
    :
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
  // https://codepen.io/kipp0/pen/pPNrrj
  launch_toast = () => {
    let x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
  }

  render() {
    const { todos } = this.state;

    return !Object.keys(todos).length ?
    <div className = 'flex flex-column items-center'>
    <h1>This app is waiting for an API connection</h1>
    <h1>Please press refresh or CTRL/CMD + R after few seconds</h1>
    <h1>Thank you.</h1>
    </div>
    :
      (
        <div className='tc'>
          <img alt = "" src={ require('../logo.png') } />
           <InsertBox handleChange={this.onChange}/>
           <SubmitButton handleSubmit={this.onSubmit}/>
          <CardList todos={ todos } />
        </div>
      );
  }
}

export default App;
