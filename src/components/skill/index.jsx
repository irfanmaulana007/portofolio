import React, { Component } from 'react';

import Title from '../title/Title'
import './styles.css'

class index extends Component {
	render () {
		return (
			<div id="skill" className="pt-nav pb-nav parallax bg-section2">
				<div className="bg-blur"></div>
				<div className="container">
					<div className="row">
						<div className="col">
							<Title text="Skill" />
						</div>
					</div>
					<br/><br/><br/>
					<div className="row">
						<div className="col-4">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-code mb-3"></i>
									<p>Building</p>
									<p>- Website Portofolio</p>
									<p>- Company Profile</p>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-map mb-3"></i>
									<p>Responsive Web</p>
									<p>Design</p>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-magic mb-3"></i>
									<p>Slicing <br/> from Mockup</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-4 offset-2">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-gears mb-3"></i>
									<p>Web Service</p>
									<p>RESTful APIs</p>
								</div>
							</div>
						</div>
						<div className="col-4 offset-">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-code-fork mb-3"></i>
									<p>Versioning</p>
									<p>and</p>
									<p>Maintain Project</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default index;