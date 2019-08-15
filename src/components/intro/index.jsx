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
          <div className="text-center">
            <a href="#contact">
              <button className="btn btn-danger mr-3">I need a website</button>
            </a>
            <a href="#contact">
              <button className="btn btn-outline">I'm looking to hire</button>
            </a>
          </div>
          <br/>
          <div className="text-center">
              <a href="https://www.linkedin.com/in/irfan-maulana-0a6504143/" target="_blank" rel="noopener noreferrer" className="text-light small">Visit my Linkedin</a>
          </div>
        </div>

      </div>
		)
	}
}

export default index;