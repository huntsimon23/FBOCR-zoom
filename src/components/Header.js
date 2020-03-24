import React, { Component } from 'react';
import Button from './Button'

class Header extends Component {
render(){    
return (
<div> 
    <img 
    className="img-fluid img-thumbnail"
    src="./assets/CR-logo-hrz-color.png" 
    alt="CRlogo"       
    />
    <br />
    <br />
    <h1 className="text-center">First Baptist Orlando's Online Open Share Groups</h1>
    <br />
    <h4>Please note: These groups are open for all who have been thru our Newcomers 101 orentation here at FBOCR.  If you are new to CR at First Orlando, please complete this short form and a member of our team will schedule a Newcomers 101 session with you! </h4>
    <br />
    <Button 
       id="Newcomers 101"
       key="Newcomers 101"
       name="Request Newcomers 101 Orientation"
       link="https://fbocr.churchcenter.com/people/forms/117331"
    />
</div>
)}
}

export default Header;