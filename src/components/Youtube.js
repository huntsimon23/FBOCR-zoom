import React, { Component } from 'react';
import '../App.css';

class Youtube extends Component {
render(){
return (
<div className="iframe"> 
<iframe width="auto" height="auto" src="https://youtu.be/9ORqiHw3olA?t=712" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
)}
}

export default Youtube;