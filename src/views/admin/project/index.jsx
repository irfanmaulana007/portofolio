import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Moment from 'react-moment'

import store from './../../../store'

import { startLoading, stopLoading } from './../../../actions'
import { projectService } from './../../../common/api.service'
import FormGroup from './../../../components/utils/FormGroup'
import SideNavigation from './../../../components/utils/SideNavigation'

let initialState = {
	project: []
}

class ProjectView extends Component {
	constructor(props) {
		super(props)
		this.state = initialState
	}

	getProject = () => {
		store.dispatch(startLoading('Fetching project data . . .'))
		projectService.get()
		.then((res) => {
			this.setState({ project: res.data })
		})
		.finally(() => { store.dispatch(stopLoading()) })
	}

	componentDidMount () {
		this.getProject()
	}
	
	render () {
		return (
			<div className="h-100 row">
				<div className="col-2 p-0">
					<SideNavigation />
				</div>

				<div className="col-10 p-5">
					<h3>Project</h3>
					<br/>
					<NavLink to='project/create'>
						<button className="btn btn-primary mb-2"><i className="fa fa-plus"></i> Add New</button>
					</NavLink>
					<table className="table table-bordered small table-sm">
						<thead className="table-dark">
							<tr>
								<td>No</td>
								<td>Image</td>
								<td>Name</td>
								<td>Description</td>
								<td>Date</td>
								<td>Action</td>
							</tr>
						</thead>
						<tbody>
							{this.state.project.map((value, key) => 
								<tr key={key}>
									<td>{key + 1}</td>
									<td className="block"><img src={require(`./../../../assets/img/project/${(value.image !== '') ? value.image : 'noimg.jpg'}`)} height="80px" alt=""/></td>
									<td>{value.name}</td>
									<td>{value.description}</td>
									<td><Moment format="DD MMMM YYYY">{value.date}</Moment></td>
									<td align="center" className="block pl-3 pr-3">
										<button className="btn btn-primary btn-sm mb-2">Edit</button><br/>
										<button className="btn btn-danger btn-sm">Delete</button>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

            </div>
		)
	}
}

export default ProjectView