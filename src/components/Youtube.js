import React, { Component } from 'react';

class Youtube extends Component {
render(){
return (
<div> 
    <iframe title={this.props.name} width="480" height="270" src={this.props.ytlink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
</div>
)}
}

export default Youtube;