import React, { Component } from 'react';

import { projectService } from './../../common/api.service'
import store from './../../store'
import { startLoading, stopLoading } from './../../actions'
// Component
import Project from './Project'
import Title from '../title/Title'

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: [
				{title: 'asdf', description: 'desc', img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112011/the_beatles.gif?itok=94lM7aXm'},
				{title: 'asdf', description: 'desc', img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112011/the_beatles.gif?itok=94lM7aXm'},
				{title: 'asdf', description: 'desc', img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112011/the_beatles.gif?itok=94lM7aXm'},
				{title: 'asdf', description: 'desc', img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112011/the_beatles.gif?itok=94lM7aXm'},
				{title: 'asdf', description: 'desc', img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112011/the_beatles.gif?itok=94lM7aXm'},
				{title: 'asdf', description: 'desc', img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112011/the_beatles.gif?itok=94lM7aXm'},
				{title: 'asdf', description: 'desc', img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112011/the_beatles.gif?itok=94lM7aXm'},
				{title: 'asdf', description: 'desc', img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112011/the_beatles.gif?itok=94lM7aXm'}
			]
		}
	}

	getProject = () => {
		store.dispatch(startLoading('Fetching project data . . .'))
		projectService.get()
		.then((res) => {
			this.setState({ project: res.data })
		})
	}

	componentDidMount() {
		this.getProject()
	}

	render () {
		return (
			<div id="project" className="pt-nav">
				<div className="container">
					<Title text="My Project" />
					<br />
					<div className="row">
						{this.state.project.map((values, key) =>
							<Project key={key} data={values} />
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default index;