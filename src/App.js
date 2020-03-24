import React, { Component }  from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Button from './components/Button';
import './App.css';
import zoomdata from './zoomdata.json'

class App extends Component {
  state = {
    zoomdata
  };  
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      
      <div className="container container-fluid">
      <div className="row">  
        {zoomdata.map(zoom => (
        <div className="col-3 text-center">  
        <Button  
        id={zoom.id}
        key={zoom.id}
        name={zoom.name}
        link={zoom.link}
        /></div>
        ))}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      </header>
    </div>
  );
  }
}

export default App;
