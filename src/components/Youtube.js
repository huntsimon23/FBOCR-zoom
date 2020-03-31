import React, { Component } from 'react';
import '../App.css';

class Youtube extends Component {
render(){
return (
<div className="iframe"> 
    <iframe title={this.props.name} src={this.props.ytlink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
    samesite="None" Secure>
    </iframe>
</div>
)}
}

export default Youtube;