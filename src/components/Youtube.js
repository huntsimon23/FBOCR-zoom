import React, { Component } from 'react';
import '../App.css';

class Youtube extends Component {
render(){
return (
<div className="iframe"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/PhpyES8e5-U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
)}
}

export default Youtube;