import React, { Component } from 'react';

class Youtube extends Component {
render(){
return (
<div> 
    <iframe title={this.props.name} width="480" height="270" src={this.props.ytlink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
    samesite="None" Secure>
    </iframe>
</div>
)}
}

export default Youtube;