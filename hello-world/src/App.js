import React, { Component } from 'react';
import './App.css';
import Greet  from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';


class App extends Component {
  render () {
    return (
    <div className='App'>
      
      <Hello/>

    </div>
    );
  }
}

export default App;
