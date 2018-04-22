import React, { Component } from 'react';
import style from './App.css';
import { setTimeout } from 'timers';
import Intro from './components/Intro/Intro';
import cn from 'classnames';

class App extends Component {

  state = {
    title: 'asdasd',
    body: 'asdasd',
    isLoading: true
  }

componentDidMount () {


 }

  render() {
    return (
      <div className={cn(style.App)}>
        <Intro />
      </div>
    );
  }
}

export default App;
