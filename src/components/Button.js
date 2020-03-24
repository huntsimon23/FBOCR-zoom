import React from 'react';

function Button(props) {
return (
<div>
<a href={props.link}>
   <button type="button"
      className="btn btn-primary btn-lg">
   {props.name}
   </button>
</a>
<div className="card-body">
    {/* <p className="card-text">subtext</p> */}
</div>
</div>
)} 

export default Button;