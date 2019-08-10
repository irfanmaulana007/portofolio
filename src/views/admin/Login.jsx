import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import swal from 'sweetalert/dist/sweetalert.min.js'

import store from './../../store'
import { startLoading, stopLoading } from './../../actions'
import { authService } from './../../common/api.service'
import { setToken, setUserID, setUsername } from './../../common/jwt.service'
import FormGroup from './../../components/utils/FormGroup'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'irfanmaulana007',
			password: 'password',
		}
	}

	login = (e) => {
		if (this.state.username !== '' && this.state.password !== '') {
			e.preventDefault()
			this.setState({error: ''})
			store.dispatch(startLoading("Logging in . . ."))
			authService.login(this.state)
			.then((res) => {
				setToken(res.token)
				setUserID(res.user.id)
				setUsername(res.user.username)
				
				this.props.history.push('admin/dashboard')
			})
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
							<FormGroup name='username' type='text' change={this.handleInput} value={this.state.username} required="yes" focus="on" />
							<FormGroup name='password' type='password' change={this.handleInput} value={this.state.password} required="yes" />

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