import React, { Component } from 'react'

import Title from '../title/Title'
import './styles.css'

class index extends Component {
	render () {
		return (
			<div id="tech-stack" className="pt-nav pb-nav bg-section2 parallax">
				<div className="bg-blur"></div>
				<div className="container">
					<div className="row">
						<div className="col">
							<Title text="Tech Stack" />
						</div>
					</div>
					<br/>
					<div className="row text-center">
						<div className="col border-right">
							Front End
							<hr/>
							<ul className="p-0 list-unstyled list-tech">
								<li>SASS</li>
								<li>ReactJs</li>
								<li>Redux</li>
							</ul>
						</div>
						<div className="col border-right">
							Design
							<hr/>
							<ul className="p-0 list-unstyled list-tech">
								<li>Adobe Illustrator</li>
								<li>Adobe Photoshop</li>
								<li>Adobe Experience Design</li>
							</ul>
						</div>
						<div className="col">
							Back End
							<hr/>
							<ul className="p-0 list-unstyled list-tech">
								<li>Laravel</li>
								<li>MsSQL / MySQL</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default index;