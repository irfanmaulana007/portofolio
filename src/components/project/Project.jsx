import React, { Component } from 'react'

import Moment from 'react-moment'
import './styles.css'

class Project extends Component {
	render () {
		const { data } = this.props
		if (data.image === '') { data.image = 'noimg.jpg' }
		return (
			<div id="project" className="col-md-3 pb-5">
				<div className="card">
					<div className="card-header">
						{data.name}
					</div>
					<div className="card-img-bottom">
						<div className="hoverable">
							<div className="content">
								<h5><Moment format="DD MMMM YYYY">{data.date}</Moment></h5>
								<p>{data.description}</p>
								{
									data.link !== '' &&
									<a href={data.link} target="_blank" rel="noopener noreferrer" className="text-white">visit</a>
								}
							</div>
						</div>
						<center>
							<div className="box">
								<img src={require(`./../../assets/img/project/${data.image}`)} alt="" />
							</div>
						</center>
					</div>
				</div>
			</div>
		)
	}
}

export default Project;