import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

if (window.innerWidth >= 992) {
	window.onscroll = () => {
		var nav = document.getElementById('nav')
		if (nav !== null) {
			if (window.pageYOffset > 80) {
				nav.classList.remove('top')
			} else {
				nav.classList.add('top')
			}
		}
	}
}

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNav: false
		}
	}

	handleNav = () => {
		this.setState({ showNav: !this.state.showNav})
	}

	render() {
		return (
			<nav id="nav" className="navbar navbar-expand-sm bg-grey navbar-dark fixed-top top pl-5 pr-5">
				<a href="/#" className="navbar-brand text-white">Irfan Maulana's <span className="text-danger">Portofolio</span></a>

			  	<ul className="navbar-nav ml-auto navbar-large">
	  				<li className="nav-item ml-2 mr-2" activeclassname="active">
				  		<a href="/#profile" className="nav-link">Profile</a>
	  				</li>
	  				<li className="nav-item ml-2 mr-2">
				  		<a href="/#skill" className="nav-link">Skill</a>
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
	  				{/* <li className="nav-item ml-2 mr-2">
                        <NavLink to ='/login' activeClassName="active">
							<span className="nav-link">Login</span>
						</NavLink>
	  				</li> */}
			  	</ul>
			  	<ul className="navbar-nav ml-auto navbar-small">
	  				<li className="nav-item ml-2 mr-2">
						<span className="nav-link"><i className="fa fa-bars" onClick={this.handleNav}></i></span>
	  				</li>
					  {
						  this.state.showNav == true &&
						  (
							<div className="content">
								<div className="item">
									<a href="/#profile" className="nav-link">Profile</a>
								</div>
								<div className="item">
									<a href="/#skill" className="nav-link">Skill</a>
								</div>
								<div className="item">
									<a href="/#project" className="nav-link">Project</a>
								</div>
								<div className="item">
									<a href="/#tech-stack" className="nav-link">Tech Stack</a>
								</div>
								<div className="item">
									<a href="/#contact" className="nav-link">Contact</a>
								</div>
							</div>
						  )
					  }
				</ul>
			</nav>
		)
	}
}

export default Navigation