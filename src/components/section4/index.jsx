import React, { Component } from 'react';

// Componenct
import Project from './Project'

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
	render () {
		return (
			<div id="section4" className="pt-nav">
				<div className="container">
					<h4><b>Project</b></h4>
					<br />
					<div className="row">
						{this.state.project.map((o, key) =>
							<Project data={o} />
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default index;