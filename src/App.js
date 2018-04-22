import React, { Component } from 'react';
import './App.css';
import { setTimeout } from 'timers';

class App extends Component {

  state = {
    title: '',
    body: '',
    isLoading: true
  }

componentDidMount () {
    setTimeout( () => {this.setState({isLoading: false})}, 5000)


 }

  render() {
    return (
      (!this.state.isLoading) ? 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          {this.state.body}
        </p>
      </div>
      :<p>Loading...</p>
    );
  }
}

export default App;
