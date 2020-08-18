import React, { Component } from 'react';
import Button from './Button'

class Header extends Component {
render(){    
return (
<div className = "container"> 
    <img 
    className="img-fluid img-thumbnail"
    src="./assets/CR-logo-hrz-color.png" 
    alt="CRlogo"       
    />
    <br />
    <br />
    <h1 className="text-center">First Baptist Orlando's Online Open Share Groups</h1>
    <br />
    <h4>ALL FBO CR Online Groups Have Moved to the new website!  
    Click button below to be redirected.</h4>
    <br />
    <Button 
       id="New Site"
       key="New Site"
       name="visit firstorlandorecovery.com"
       link="https://firstorlandorecovery.com"
    />
</div>
)}
}

export default Header;