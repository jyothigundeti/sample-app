import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Search extends React.Component {

	constructor(props) {
    super(props);
  	this.state={
  		
  	};

   //this.submitDetails=this.submitDetails.bind(this);
  };

    // submitDetails(event){
    // 	event.preventDefault();
      
    //    let email = ReactDOM.findDOMNode(this.refs.email).value;
    //    let password = ReactDOM.findDOMNode(this.refs.password).value;
    //    let mobile = ReactDOM.findDOMNode(this.refs.mobile).value;
    //    console.log(email,password,mobile);

    //   if(email && password && mobile){
    //     this.props.dispatch(sendSMSRequest({email,password,mobile}));
    //   }
    //   console.log('submitDetails');
    // }

    
	render() {
		return (
			<form>
      <select>
      <option>Select City</option>
       <option>Hyderabad</option>
        <option>Karimnagar</option>
         <option>AP</option>
          <option>Secunderabad</option>
          
      </select> 
      <select>
      <option>Select location</option>
      <option>Hitech city</option>
        <option>Kondapur</option>
         <option>Indra nagar</option>
          <option>Begumpet</option>
           <option>Kothguda</option>
            <option>Miyapoor</option>
      </select>
			<button type="button"onClick={this.submitDetails}>Send OTP</button>
			</form>  
		);
	}
}

export default connect()(Search);