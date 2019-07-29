import React, { Component } from 'react'

import './title.css'

class Title extends Component {
    render () {
        const { text } = this.props
        return (
            <div>
                <h4 className="text-center">{ text }</h4>
                <hr/>
            </div>
        )
    }
}

export default Title