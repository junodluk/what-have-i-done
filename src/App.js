import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitAction, textAction } from './actions/simpleAction';

import logo from './logo.svg';
import './App.css';

const mapStateToProps = state => state.form;
// const mapDispatchToProps = () => ({ textAction, submitAction });
const mapDispatchToProps = dispatch => ({
  textAction, submitAction
})

class App extends Component {
  simpleAction = (event) => {
    this.props.textAction('testeeeee');
  }

  render() {
    return (
      <div className="App">
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.simpleAction}>Test redux action</button>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
