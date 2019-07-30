import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import store from './../../store'

import { startLoading, stopLoading } from './../../actions'
import { authService } from './../../common/api.service'
import FormGroup from './../../components/utils/FormGroup'

class Dashboard extends Component {
	render () {
	
		return (
			<div className="h-100">
                <h1>Dashboard</h1>
            </div>
		)
	}
}

export default Dashboard