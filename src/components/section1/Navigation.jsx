import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm bg-grey navbar-dark fixed-top">
				<a href="#section1" className="navbar-brand text-white">new <span className="text-danger">Portofolio</span></a>

			  	<ul className="navbar-nav ml-auto">
	  				<li className="nav-item">
				  		<a href="#section2" className="nav-link">Profile</a>
	  				</li>
	  				<li className="nav-item">
				  		<a href="#section3" className="nav-link">Service</a>
	  				</li>
	  				<li className="nav-item">
				  		<a href="#section4" className="nav-link">Project</a>
	  				</li>
	  				<li className="nav-item">
				  		<a href="#section5" className="nav-link">Tech stack</a>
	  				</li>
	  				<li className="nav-item">
				  		<a href="#section6" className="nav-link">Contact</a>
	  				</li>
			  	</ul>
			</nav>
		)
	}
}

export default Navigation;