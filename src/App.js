import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className="App-header">
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className={classes.AppTitle}>React Boilerplate</h1>
        </header>
        <p className={classes.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={classes.AppIntro}>
          This boilerplate has all the minimum configurations to use react CSS
          Modules and redux basic config.
        </p>
      </div>
    );
  }
}

export default App;
