import React, { Component, Fragment } from 'react';
import style from './App.css';
import Intro from './components/Intro/Intro';
import cn from 'classnames';
import Spinner from './hoc/Spinner/Spinner'
import { setTimeout } from 'timers';

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
        {!this.state.isLoading 
          ?<Intro />
          :<Spinner />}
        </div>
      </Fragment>
    );
  }
}

export default App;
