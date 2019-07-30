import React, { Component } from 'react';
import swal from 'sweetalert/dist/sweetalert.min.js'
import Title from '../title/Title'

import { contactService } from './../../common/api.service'


let initialState = {
	email: '',
	subject: '',
	message: ''
}
class index extends Component {
	constructor(props){
		super(props)
		this.state = initialState
	}

	sendContact = (e) => {
		if (this.state.email !== '' && this.state.subject !== '' && this.state.message !== '') {
			e.preventDefault()
			contactService.send(this.state)
			.then(() => {
				swal({
					title: 'Mail sent',
					text: 'Thankyou for your mail, we will response as soon as possible to your email.',
					icon: 'success',
					timer: 5000
				})
				
				this.setState({...initialState})
			})
			.catch((err) => { console.log(err.response) })
		}
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	} 

	render () {
		return (
			<div id="contact" className="h-100 pt-nav">
				<div className="container">
					<div className="row">
						<div className="col-6 offset-3">
							<Title text="Drop a line" />
							<br/>
							<form>
								<div className="form-group">
									<label htmlFor="Email" className="text-muted small">Email</label>
									<input type="email" className="form-control" name="email" required="yes" autoComplete="off" value={this.state.email} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label htmlFor="Subject" className="text-muted small">Subject</label>
									<input type="text" className="form-control" name="subject" required="yes" autoComplete="off" value={this.state.subject} onChange={this.handleChange} />
								</div>
								<div className="form-group">
									<label htmlFor="Message" className="text-muted small">Message</label>
									<textarea className="form-control" name="message" rows="5" required="yes"  value={this.state.message} onChange={this.handleChange}></textarea>
								</div>
								<div className="form-group">
									<center><button className="btn btn-block btn-primary" onClick={this.sendContact}>Send mail</button></center>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default index;