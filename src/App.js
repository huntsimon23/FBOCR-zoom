import React, { Component }  from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Button from './components/Button';
import Youtube from './components/Youtube';
import './App.css';
import zoomdata from './zoomdata.json';

class App extends Component {
  state = {
    zoomdata
  };  
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <hr />
      <h4 className="text-center">
      <span>This week's video: 
      Dealing with isolation and preventing relapse</span>   
      </h4>  
      <hr />   
      <Youtube 
      name="Defeating Isolation"
      ytlink="https://www.youtube.com/embed/zRjtMQxuRRc"
      /> 
      <hr />
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
      </div>
      </header>
    </div>
  );
  }
}

export default App;
