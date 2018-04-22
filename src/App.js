import React, { Component } from 'react';
import './App.css';
import { setTimeout } from 'timers';

class App extends Component {

  state = {
    title: 'asdasd',
    body: 'asdasd',
    isLoading: true
  }

componentDidMount () {
    setTimeout( () => {this.setState({isLoading: false})}, 5000)


 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          {this.state.body}
        </p>
      </div>
    );
  }
}

export default App;
