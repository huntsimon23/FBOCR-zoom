import React, { Component } from 'react';
import '../App.css';

class Youtube extends Component {
render(){
return (
<div className="iframe"> 
<iframe width="auto" height="auto" src="https://www.youtube.com/embed/u7o6R1NuvXA?start=133" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
)}
}

export default Youtube;