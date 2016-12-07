import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import  { addLoginRequest }  from './LoginActions';

class Login extends React.Component {

	constructor(props) {
    super(props);
  	
  	this.state={
  		email:'',
  		password:''
  
  	};

   this.loginDetails=this.loginDetails.bind(this);
  };

    loginDetails(event){ 
    	event.preventDefault();
   
       let email = ReactDOM.findDOMNode(this.refs.email).value;
       let password = ReactDOM.findDOMNode(this.refs.password).value;
    
       console.log(email,password);

      if(email && password){
        this.props.dispatch(addLoginRequest({email,password}));
      }
    }

    
	render() {
		return (
			<form>
      Email ID:
			<input type="text" placeholder="Email" ref="email"/> <br/><br/>
      Password:
			<input type="text" placeholder="Password" ref="password"/> <br/><br/>
			<input type="submit" onClick={this.loginDetails}/>
			</form>  
		);
	}
}

export default connect()(Login);