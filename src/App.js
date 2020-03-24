import React, { Component }  from 'react';
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
    <div className="App container container-fluid">
      <header className="App-header">
      <Header />
      </header>
      <hr />
      <h2 className="text-center">
      <span>This week's video: 
      Dealing with isolation and preventing relapse</span>   
      </h2>  
      <br />   
      <Youtube 
      name="Defeating Isolation"
      ytlink="https://www.youtube.com/embed/zRjtMQxuRRc"
      /> 
      <hr />
      <h2>Open Share Groups - Start at 7:30pm EST</h2>
      <h6 className="text-center">
      <span>These rooms will open at 7:30pm on Tuesday nights beginning 3/25/2020.  The group host will go over guidelines that must be followed at ALL times.  The group host has been asked to strictly enforce these guidelines for the safety of the entire group.  You can read more about these guidelines at <a href="https://www.celebraterecovery.com/crcr" font-weight="strong" target="_blank">CelebrateRecovery.com</a>
      <br />
      <br />
      A password is required to access the room - if you do not have one, contact <a href="mailto:celebraterecovery@firstorlando.com">celebraterecovery@firstorlando.com</a>.  Please note that all participants are required to complete Newcomers 101 orientation before joining an online FBOCR open share group!  </span>   
      </h6>
      <hr />
        <div className="container container-fluid">
          {zoomdata.map(zoom => (
          <div key={zoom.id}>  
          <Button  
          id={zoom.id}
          key={zoom.id}
          name={zoom.name}
          link={zoom.link}
          />
          </div>
          ))}  
        </div>
      <div>
        <h4>New to Zoom?  Looking for some tech pointers?</h4>
        <a href="https://www.celebraterecovery.com/crcr/95-crcr/224-zoom-videos" target = "_blank">
        <button className="btn btn-danger btn-lg">
        An overview of Zoom & CR
        </button></a>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/400016656" width="640" height="400" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

  );
  }
}

export default App;
