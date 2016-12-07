import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import  { addSignUpRequest }  from './signupActions';

class Signup extends React.Component {

	constructor(props) {
    super(props);
  	
  	this.state={
  		fname:'',
  		lname:'',
  		email:'',
  		password:'',
  		mobile:''
  	};

   this.submitDetails=this.submitDetails.bind(this);
  };

    submitDetails(event){
    	event.preventDefault();
       let fname = ReactDOM.findDOMNode(this.refs.fname).value;
       let lname = ReactDOM.findDOMNode(this.refs.lname).value;
       let email = ReactDOM.findDOMNode(this.refs.email).value;
       let password = ReactDOM.findDOMNode(this.refs.password).value;
       let mobile = ReactDOM.findDOMNode(this.refs.mobile).value;
       console.log(fname,lname,email,password,mobile);

      if(fname && lname && email && password && mobile){
        this.props.dispatch(addSignUpRequest({fname,lname,email,password,mobile}));
      }
    }

    
	render() {
		return (
			<form>
			FirstName:
			<input type="text" placeholder="FirstName" ref="fname"/> <br/><br/>
      LastName:
			<input type="text" placeholder="LastName" ref="lname"/> <br/><br/>
      Email ID:
			<input type="text" placeholder="Email" ref="email"/> <br/><br/>
      Password:
			<input type="text" placeholder="Password" ref="password"/> <br/><br/>
      MobileNo:
			<input type="text" placeholder="MobileNo." ref="mobile"/> <br/><br/>
			<input type="submit" onClick={this.submitDetails}/>
			</form>  
		);
	}
}

export default connect()(Signup);