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
						<div className="col-6 col-md-4">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-code mb-3"></i>
									<p>Building</p>
									<p>- Website Portofolio</p>
									<p>- Company Profile</p>
									<p>- Custom SPAs</p>
								</div>
							</div>
						</div>
						<div className="col-6 col-md-4">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-map mb-3"></i>
									<p>Responsive Web Design</p>
									<p>- Desktop View</p>
									<p>- Tab View</p>
									<p>- Mobile View</p>
								</div>
							</div>
						</div>
						<div className="col-6 col-md-4">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-magic mb-3"></i>
									<p>Slicing <br/> from Mockup</p>
								</div>
							</div>
						</div>
						<div className="col-6 col-md-4 offset-md-2">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-gears mb-3"></i>
									<p>Web Service</p>
									<p>RESTful APIs</p>
									<p>- Laravel</p>
								</div>
							</div>
						</div>
						<div className="col-6 offset-3 col-md-4 offset-md-0">
							<div className="skill-item">
								<div className="content">
									<i className="fa fa-code-fork mb-3"></i>
									<p>Versioning Control</p>
									<p>- Github</p>
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