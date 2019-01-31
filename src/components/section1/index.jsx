import React, { Component } from 'react';

// Components
import Navigation from './Navigation'
import Typed from './../../../node_modules/react-typed/dist/react-typed'

// Styles
import './styles.css'

class index extends Component {
	render () {
		return (
      <div id="section1" className="h-100 bg-grey pt-nav background">
        <Navigation />

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
        </div>
      </div>
		)
	}
}

export default index;