import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import store from './../../store'

import { startLoading, stopLoading } from './../../actions'
import { authService } from './../../common/api.service'
import FormGroup from './../../components/utils/FormGroup'
import SideNavigation from './../../components/utils/SideNavigation'

class Dashboard extends Component {
	
	render () {
		return (
			<div className="h-100 row">
				<div className="col-2 p-0">
					<SideNavigation />
				</div>

				<div className="col-10 p-5">
					<h1>Dashboard</h1>
				</div>

            </div>
		)
	}
}

export default Dashboard