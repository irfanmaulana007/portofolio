import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './store'

// Styles
import './App.css'

// Components
import Loaders from './components/utils/Loaders'

// Views
import Main from './views/Index'
import Login from './views/admin/Login'
import Dashboard from './views/admin/Dashboard'
import ProjectView from './views/admin/project/index'
import NotFound from './views/NotFound'

class App extends Component {
	constructor(props){
		super(props)
		this.state = store.getState().utils

		store.subscribe (() => {
			this.setState(store.getState().utils)
		})
	}

	render() {
		return (
			<Router>
				<Loaders display={this.state.loaders} message={this.state.message} />
				<div className="h-100">
					<Switch>
						<Route exact path="/" component={Main} />
						
						{/* Admin */}
						<Route exact path="/login" component={Login} />
						<Route exact path="/admin/dashboard" component={Dashboard} />
						<Route exact path="/admin/project" component={ProjectView} />

						<Route path="*" component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App
