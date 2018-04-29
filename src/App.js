import React, { Component, Fragment } from 'react';

import Intro from './components/Intro/Intro';
import Spinner from './hoc/Spinner/Spinner'
import cn from 'classnames';
import { setTimeout } from 'timers';
import style from './App.css';

class App extends Component {

  state = {
    title: 'asdasd',
    body: 'asdasd',
    isLoading: true
  }

componentDidMount () {
  setTimeout(() => {this.setState({ isLoading: false})}, 1000)

 }

  render() {
    return (
      <Fragment>
        <div className={cn(style.App)}>
          { !this.state.isLoading 
            ? <Intro />
            : <Spinner />
          }
        </div>
      </Fragment>
    );
  }
}

export default App;
