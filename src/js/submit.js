import React from 'react';
import axios from 'axios';

class sub extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }
  handleSubmit(e) {
    e.preventDefault();

    axios({
		method: "POST", 
		url:"https://mailthis.to/jyao413@aucklanduni.ac.nz", 
		data:  this.state
	  })
	console.log(this.state)
	this.resetForm()

  }
  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }
  
  render() {
	return(

	<div className="App">
	<form action="https://mailthis.to/jyao413@aucklanduni.ac.nz" method="POST" encType="multipart/form-data">
	<div className="form-group">
		<label htmlFor="name">Name</label>
	<input type="text" className="form-control" name="name" placeholder="Your name"/>
	</div>
	<div className="form-group">
		<label htmlFor="exampleInputEmail1">Email address</label>
		<input className="form-control" type="email" name="_replyto" placeholder="Your email"/>
	</div>
	<div className="form-group">
		<label htmlFor="message">Message</label>
		<textarea className="form-control" name="message" rows="5" placeholder="Enter your message here"></textarea>
	</div>
	<input type="hidden" name="_after" value="http://jasonyao.herokuapp.com/"/>

	<button type="submit" className="mem">Submit</button>
	</form>
	</div>
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}

export default sub;