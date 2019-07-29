import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import store from './../../store'

import { startLoading, stopLoading } from './../../actions'
import { authService } from './../../common/api.service'
import FormGroup from './../../components/utils/FormGroup'
import Alert from 'react-bootstrap/Alert'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			response: {
				status: '',
				title: '',
				message: ''
			},
			showAlert:false,
		}
	}

	login = (e) => {
		e.preventDefault()
		this.setState({error: ''})
		// store.dispatch(startLoading("Logging in . . ."))
		// authService.login(this.state)
		// .then((res) => {
		// 	if (res.data.status === 'success') {
		// 		localStorage.setItem('id', res.data.user.id);
		// 		localStorage.setItem('name', res.data.user.name);
		// 		localStorage.setItem('username', res.data.user.username);
		// 		this.props.history.push('/sync')
		// 	} else {
		// 		this.setState({
		// 			response: {
		// 				status: res.data.status,
		// 				title: res.data.title,
		// 				message: res.data.message,
		// 			},
		// 			showAlert: true
		// 		})
		// 	}
		// })
		// .catch((err) => { alert(err) })
		// .finally(() => { store.dispatch(stopLoading()) })
	}

	handleInput = (e) => {
		this.setState({[e.target.id]: e.target.value})
	}

	render () {
		// const user = localStorage.getItem('username');
	    // if (user !== null) {
	    //    return <Redirect to='/sync'/>;
		// }

		return (
			<div className="bg-theme h-100">
				<div id="content" className="pt-nav mt-5 small">
					<div className="col-md-6 offset-md-3 card p-5">
						<h3 className="text-center">Login</h3>
						<br/>
						<form action="">
							<FormGroup name='username' type='text' change={this.handleInput} focus="on" />
							<FormGroup name='password' type='password' change={this.handleInput} />
							
							{/* {
								(this.state.showAlert)
								?
								(
									<Alert variant={this.state.response.status} onClose={this.handleCloseAlert} dismissible>
										<strong className="text-uppercase mr-1">{this.state.response.title}!</strong> {this.state.response.message}
									</Alert>
								)
								: ''
							} */}
							<br/>

							<div className="form-group">
								<button type="button" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login