import React, {Component} from 'react';

class Button extends Component {
render(){
return (
<div>
<a href={this.props.link}>
   <button type="button"
      className="btn btn-primary btn-lg">
   {this.props.name}
   </button>
</a>
<hr />
</div>
)} 
}
export default Button;