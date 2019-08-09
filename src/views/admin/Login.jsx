import React, { Component } from 'react'
import swal from 'sweetalert/dist/sweetalert.min.js'
import { NavLink } from 'react-router-dom'

import { Redirect } from 'react-router-dom'
import store from './../../store'

import { startLoading, stopLoading } from './../../actions'
import { authService } from './../../common/api.service'
import FormGroup from './../../components/utils/FormGroup'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			response: {
				status: '',
				message: ''
			},
			showAlert: false,
		}
	}

	login = (e) => {
		if (this.state.username !== '' && this.state.password !== '') {
			e.preventDefault()
			this.setState({error: ''})
			store.dispatch(startLoading("Logging in . . ."))
			authService.login({username: this.state.username, password: this.state.password})
			.then((res) => {
				if (res.data.response.login === true) {
					localStorage.setItem('id', res.data.userId);
					localStorage.setItem('name', res.data.name);
					localStorage.setItem('username', res.data.username);
					localStorage.setItem('email', res.data.email);
					this.props.history.push('/dashboard')
				} else {
					this.setState({
						response: {
							status: res.data.response.status,
							message: res.data.response.message
						},
						showAlert: true
					})
				}
				
				let alertIcon = this.state.response.status
				if (this.state.response.status === 'failed') { alertIcon = 'error' }
				console.log(this.state.response);
				swal({
					title: 'Login ' + this.state.response.status,
					text: this.state.response.message,
					icon: alertIcon,
					timer: 5000
				})
			})
			.catch((err) => { alert(err) })
			.finally(() => { store.dispatch(stopLoading()) })
		}
	}

	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
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
						<form>
							<FormGroup name='username' type='text' change={this.handleInput} required="yes" focus="on" />
							<FormGroup name='password' type='password' change={this.handleInput} required="yes" />

							<br/>

							<div className="form-group">
								<button className="btn btn-primary btn-block" onClick={this.login}>Login</button>
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