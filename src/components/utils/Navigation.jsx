import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

window.onscroll = () => {
	var nav = document.getElementById('nav')
	if (window.pageYOffset > 80) {
	  nav.classList.remove('top')
	} else {
	  nav.classList.add('top')
	}
}

class Navigation extends Component {
	render() {
		return (
			<nav id="nav" className="navbar navbar-expand-sm bg-grey navbar-dark fixed-top top pl-5 pr-5">
				<a href="/#" className="navbar-brand text-white">Irfan Maulana's <span className="text-danger">Portofolio</span></a>

			  	<ul className="navbar-nav ml-auto">
	  				<li className="nav-item ml-2 mr-2" activeclassname="active">
				  		<a href="/#profile" className="nav-link">Profile</a>
	  				</li>
	  				<li className="nav-item ml-2 mr-2">
				  		<a href="/#service" className="nav-link">Service</a>
	  				</li>
	  				<li className="nav-item ml-2 mr-2">
				  		<a href="/#project" className="nav-link">Project</a>
	  				</li>
	  				<li className="nav-item ml-2 mr-2">
				  		<a href="/#tech-stack" className="nav-link">Tech stack</a>
	  				</li>
	  				<li className="nav-item ml-2 mr-2">
				  		<a href="/#contact" className="nav-link">Contact</a>
	  				</li>
	  				<li className="nav-item ml-2 mr-2">
                        <NavLink to ='/login' activeClassName="active">
							<span className="nav-link">Login</span>
						</NavLink>
	  				</li>
			  	</ul>
			</nav>
		)
	}
}

export default Navigation