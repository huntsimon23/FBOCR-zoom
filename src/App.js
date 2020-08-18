import React, { Component }  from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Youtube from './components/Youtube';
import Youtube2 from './components/Youtube2';
import './App.css';
import zoomdata from './zoomdata.json';

class App extends Component {
  state = {
    zoomdata
  };  

  render() {
  return (
    <div className="App container container-fluid">
      <Header />
      
        <br />
        <br />
    </div>

  );
  }
}

export default App;
