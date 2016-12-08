import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import  { sendSMSRequest }  from './smsActions';

class Sms extends React.Component {

	constructor(props) {
    super(props);
  	
  	this.state={
  		to:'',
  		body:''
  
  	};

   this.sendDetails=this.sendDetails.bind(this);
  };

    sendDetails(event){ 
    	event.preventDefault();
   
       let to = ReactDOM.findDOMNode(this.refs.to).value;
       let body = ReactDOM.findDOMNode(this.refs.body).value;
    
       console.log(to,body);

      if(to && body){
        this.props.dispatch(sendSMSRequest({to,body}));
      }
    }

    
	render() {
		return (
			<form>
      <h3>SMS Notification</h3>  <br/><br/>
      To:
			<input type="text" placeholder="Mobieno" ref="to"/> <br/><br/>
      Body:
			<textarea cols="50" placeholder= "Enter message" ref="body"></textarea> <br/><br/>
			<input type="submit" onClick={this.sendDetails}/>
			</form>  
		);
	}
}

export default connect()(Sms);