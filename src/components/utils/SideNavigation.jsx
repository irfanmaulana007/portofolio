import React, { Component } from 'react'

import { NavLink, Redirect } from 'react-router-dom'
import store from './../../store'
import { startLoading, stopLoading } from './../../actions'
import { authService } from './../../common/api.service'
import { getUsername, getToken, destroyToken } from './../../common/jwt.service'
import history from "./../../history"
import './SideNavigation.css'

class SideNavigation extends Component {
	logout = () => {
        store.dispatch(startLoading('Logging out . . .'))
        authService.logout()
        .then((res) => {
            destroyToken()
            // history.push('/')
            // return <Redirect to="/" />/
        })
        .catch((err) => { alert(err) })
        .finally(() => { store.dispatch(stopLoading()) })
    }
    
	render() {
        if (getToken() === null) {
            return <Redirect to="/" />
        }

        return (
			<div id="sidenav">
				<NavLink to="#">
					<div className="nav-item">
						<br/><br/><br/><br/>
						<div className="text-center text-white">{getUsername()}</div>
					</div>
				</NavLink>
                <NavLink to="/admin/dashboard" activeClassName="active">
                    <div className="nav-item">
                        Dashboard
                    </div>
                </NavLink>
				<NavLink to="/admin/user" activeClassName="active">
					<div className="nav-item">
						User
					</div>
				</NavLink>
				<NavLink to="/admin/project" activeClassName="active">
					<div className="nav-item">
						Project
					</div>
				</NavLink>
				<NavLink to="/admin/contact" activeClassName="active">
					<div className="nav-item">
						Contact
					</div>
				</NavLink>
                
				{/* <NavLink onClick={this.logout}> */}
					<div className="nav-item border-top bottom" onClick={this.logout}>
						Log Out
					</div>
				{/* </NavLink> */}
			</div>
		)
	}
}

export default SideNavigation;