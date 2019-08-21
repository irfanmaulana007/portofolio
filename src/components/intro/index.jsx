import React, { Component } from 'react'

import background from '../../assets/img/bg.png'

// Components
import Typed from 'react-typed'

// Styles
import './styles.css'

class index extends Component {
	render () {
		return (
			<div id="/" className="h-100 bg-grey pt-nav">
				<div className="background parallax">
				{/* <img src={background} alt=""/> */}
				</div>
				<div className="text-white intro">
					<h5 className="text-center intro-text">
						<Typed 
							strings={[
								'Hello there ...',
								'Welcome to my portofolio',
								'Enjoy your day'
							]}
							typeSpeed={80}
							backSpeed={60}
							backDelay={2000}>
						</Typed>
					</h5>
					<br /><br /><br /><br /><br />
					<div className="row">
						<div className="col-md-6 text-center">
							<a href="#contact">
								<button className="btn btn-danger mb-3">I need a website</button>
							</a>
						</div>
						<div className="col-md-6 text-center">
							<a href="#contact">
								<button className="btn btn-outline">I'm looking to hire</button>
							</a>
						</div>
					</div>
					{/* <div className="text-center">
					</div> */}
					<br/><br/>
					<div className="text-center mb-1 lead">
						{/* <a href="https://www.linkedin.com/in/irfan-maulana-0a6504143/" target="_blank" rel="noopener noreferrer" className="text-light small">Visit my Linkedin</a> */}
						<a href="https://www.linkedin.com/in/irfan-maulana-0a6504143/" target="_blank" rel="noopener noreferrer" className="text-light ml-1 mr-1" title="linkedin"><i className="fa fa-linkedin-square"></i></a>
						<a href="https://github.com/irfanmaulana007" target="_blank" rel="noopener noreferrer" className="text-light ml-1 mr-1" title="github"><i className="fa fa-github"></i></a>
					</div>
					<div className="text-center lead">
						<a href="https://www.facebook.com/irfanmaulana695" target="_blank" rel="noopener noreferrer" className="text-light ml-1 mr-1" title="facebook"><i className="fa fa-facebook-square"></i></a>
						<a href="https://www.instagram.com/irfanmaulana007/" target="_blank" rel="noopener noreferrer" className="text-light ml-1 mr-1" title="instagram"><i className="fa fa-instagram"></i></a>
						<a href="https://twitter.com/Irfanmaulana007" target="_blank" rel="noopener noreferrer" className="text-light ml-1 mr-1" title="twitter"><i className="fa fa-twitter-square"></i></a>
					</div>
				</div>
			</div>
		)
	}
}

export default index;