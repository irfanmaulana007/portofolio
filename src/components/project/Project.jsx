import React, { Component } from 'react';

import noImage from './../../assets/img/noimg.jpg'
class Project extends Component {
	render () {
		const { data } = this.props
		return (
			<div className="col-3 pb-5">
				<div className="card">
					<div className="p-3">
						<h6 className="m-0 text-capitalize text-center">{data.name}</h6>
					</div>
					<hr className="m-0 w-100 border-light" />
					<div>
						{
							data.image === null
							?
							(<img src={noImage} alt="" height="200px" width="100%" />)
							:
							(<img src={data.image} alt="" height="200px" width="100%" />)
						}
					</div>
					{/* <div className="p-3">
						<p>{data.description}</p>
					</div> */}
				</div>
			</div>
		)
	}
}

export default Project;