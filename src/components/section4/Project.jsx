import React, { Component } from 'react';

class Project extends Component {
	render () {
		return (
			<div className="col-3 pb-5">
				<div className="card">
					<div className="p-3">
						<h6 className="m-0 text-capitalize">{this.props.data.title}</h6>
					</div>
					<hr className="m-0" />
					<div>
						<img src={this.props.data.img} alt="" height="200px" width="100%" />
					</div>
					<div className="p-3">
						<p>{this.props.data.description}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Project;