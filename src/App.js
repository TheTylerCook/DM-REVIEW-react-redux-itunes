import React, { Component } from 'react';
import './App.css';
import Results from './components/Results/Results';
import Header from './components/Header/Header';

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <Header />
        <Results />
      </div>
    );
  }
}

export default App;