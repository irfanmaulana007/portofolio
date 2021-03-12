import React, { Component } from 'react';
import swal from 'sweetalert/dist/sweetalert.min.js'
import Title from '../title/Title'

import store from  './../../store'
import { startLoading, stopLoading } from './../../actions'
import { contactService } from './../../common/api.service'
import FormGroup from './../../components/utils/FormGroup'

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
			store.dispatch(startLoading('Sending Mail . . .'))
			contactService.send(this.state)
			.then(() => {
				swal({
					title: 'Mail sent',
					text: 'Thank You for Your mail, We will response as soon as possible to Your email.',
					icon: 'success',
					timer: 5000
				})
				
				this.setState({...initialState})
			})
			.catch((err) => { console.log(err.response) })
			.finally(() => { store.dispatch(stopLoading()) })
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
						<div className="col-md-6 offset-md-3">
							<Title text="Drop a line" />
							<br/>
							<form className="small">
								<FormGroup name='email' type='email' value={this.state.email} change={this.handleChange} required="yes" autocomplete="off" />
								<FormGroup name='subject' type='text' value={this.state.subject} change={this.handleChange} required="yes" autocomplete="off" />
								<FormGroup name='message' type='textarea' value={this.state.message} change={this.handleChange} required="yes" autocomplete="off" />

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