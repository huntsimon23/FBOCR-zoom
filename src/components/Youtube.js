import React, { Component } from 'react';
import '../App.css';

class Youtube extends Component {
render(){
return (
<div className="iframe"> 
<iframe width="auto" height="auto" src="https://www.youtube.com/embed/4dHX3KinTgY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
)}
}

export default Youtube;