import React, { Component } from 'react';
import classes from './App.css';
import { setTimeout } from 'timers';
import Intro from './components/Intro/Intro';

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
      <div className={classes.App}>
        <Intro />
      </div>
    );
  }
}

export default App;
