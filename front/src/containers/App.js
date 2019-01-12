import React, { Component } from 'react';
import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
      // searchfield: ''
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/')
      .then(response=> response.json())
      .then(todoList => {this.setState({ todos: todoList})});

  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    const { todos } = this.state;
    // const filteredRobots = robots.filter(robot =>{
    //   return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    // })
    console.log(todos);

    return(
        <div className='tc'>
          <img alt = "" src={ require('../logo.png') } />
          <CardList todos={ todos } />
        </div>
      );
  }
}

export default App;

/* <Scroll>
  <CardList robots={filteredRobots} />
</Scroll> */
  // <SearchBox searchChange={this.onSearchChange}/>
