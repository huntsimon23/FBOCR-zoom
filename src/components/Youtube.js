import React, { Component } from 'react';
import '../App.css';

class Youtube extends Component {
render(){
return (
<div className="iframe"> 
    {/* <iframe title={this.props.name} src={this.props.ytlink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
    SameSite="None" Secure> */}
    <iframe width="auto" height="315" src="https://www.youtube.com/embed/VcvptyIBYwk?start=508" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen SameSite="None" Secure></iframe>
    {/* </iframe> */}
</div>
)}
}

export default Youtube;