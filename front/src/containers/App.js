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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { todos, insertField } = this.state;

    return(
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
