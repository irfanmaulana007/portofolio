import React, { Component } from 'react'

// Components
import Navigation from './../components/utils/Navigation'
import Intro from '../components/intro/index'
import Profile from '../components/profile/index'
import Service from '../components/service/index'
import Project from './../components/project/index'
import TechStack from '../components/tech-stack/index'
import Contact from './../components/contact/index'

class index extends Component {
    render () {
        return (
            <div className="h-100">
                <Navigation />

                <Intro />
        
                <Profile />
        
                <Service />
        
                <Project />
                
                <TechStack />
                
                <Contact />
            </div>
        )
    }
}

export default index