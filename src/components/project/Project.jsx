import React, { Component } from 'react'

import Moment from 'react-moment'
import './styles.css'

class Project extends Component {
	render () {
		const { data } = this.props
		if (data.image === '') { data.image = 'noimg.jpg' }
		return (
			<div className="col-3 pb-5">
				<div className="card">
					<div className="card-header">
						{data.name}
					</div>
					<div className="card-img-bottom">
						<div className="hoverable">
							<div className="content">
								<h5><Moment format="DD MMMM YYYY">{data.date}</Moment></h5>
								<p>{data.description}</p>
							</div>
						</div>
						<center>
							<img src={require(`./../../assets/img/project/${data.image}`)} alt="" height="200px" width="200px" />
						</center>
					</div>
				</div>
				{/* <div className="card">
					<div className="p-3">
						<h6 className="m-0 text-capitalize text-center">{data.name}</h6>
					</div>
					<hr className="m-0 w-100 border-light" />
					<div>
						{
							data.image === ''
							?
							(<img src={noImage} alt="" height="200px" width="100%" />)
							:
							(<img src={data.image} alt="" height="200px" width="100%" />)
						}
					</div>
				</div> */}
			</div>
		)
	}
}

export default Project;