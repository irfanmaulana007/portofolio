import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
				message: ''
			},
			showAlert: false,
		}
	}

	login = (e) => {
		e.preventDefault()
		this.setState({error: ''})
		store.dispatch(startLoading("Logging in . . ."))
		authService.login({username: this.state.username, password: this.state.password})
		.then((res) => {
			console.log('res: ', res);
			if (res.data.login === true) {
				localStorage.setItem('id', res.data.user.userId);
				localStorage.setItem('name', res.data.user.name);
				localStorage.setItem('username', res.data.user.username);
				localStorage.setItem('email', res.data.user.email);
				this.props.history.push('/dashboard')
			} else {
				this.setState({
					response: {
						message: res.data.message
					},
					showAlert: true
				})
			}
		})
		.catch((err) => { alert(err) })
		.finally(() => { store.dispatch(stopLoading()) })
	}

	handleInput = (e) => {
		this.setState({[e.target.id]: e.target.value})
	}

	render () {
		const user = localStorage.getItem('userId');
	    if (user !== null) {
	    	return <Redirect to='/dashboard'/>;
		}

		return (
			<div className="bg-theme h-100">
				<div id="content" className="pt-nav small">
					<div className="col-md-6 offset-md-3 card p-5">
						<h3 className="text-center">Login</h3>
						<br/>
						<form action="">
							<FormGroup name='username' type='text' change={this.handleInput} focus="on" />
							<FormGroup name='password' type='password' change={this.handleInput} />
							
							{
								(this.state.showAlert)
								?
								(
									// this.state.response.message
									<Alert variant='danger' onClose={this.handleCloseAlert} dismissible>
										<strong className="mr-1">Login Failed!</strong> {this.state.response.message}
									</Alert>
								)
								: ''
							}
							<br/>

							<div className="form-group">
								<button type="button" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
							</div>
							<div className="text-center">
								<NavLink to ='/'>
									<span className="nav-link">back to home</span>
								</NavLink>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login