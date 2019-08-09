import React, { Component } from 'react';

import Title from '../title/Title'
import './styles.css'

class index extends Component {
	render () {
		return (
			<div id="service" className="pt-nav pb-nav bg-section2">
				<div className="container">
					<Title text="Service" />
					<br/>
					<div className="row">
						<div className="col-3">
							<div className="service-item">
								<div className="content">
									<br/>
									<i className="fa fa-trash mb-2"></i>
									<p>Building<br/> Website Portofolio</p>
								</div>
							</div>
						</div>
						<div className="col-3 offset-1">
							<div className="service-item">
								<div className="content">
									<br/>
									<i className="fa fa-trash mb-2"></i>
									<p>Building<br/> Company Profile</p>
								</div>
							</div>
						</div>
						<div className="col-3 offset-1">
							<div className="service-item">
								<div className="content">
									<br/>
									<i className="fa fa-trash mb-2"></i>
									<p>Slicing</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-m5">
						<div className="col-3 offset-2">
							<div className="service-item">
								<div className="content">
									<br/>
									<i className="fa fa-trash mb-2"></i>
									<p>Building<br/> Website Portofolio</p>
								</div>
							</div>
						</div>
						<div className="col-3 offset-1">
							<div className="service-item">
								<div className="content">
									<br/>
									<i className="fa fa-trash mb-2"></i>
									<p>Building<br/> Website Portofolio</p>
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