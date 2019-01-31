import React, { Component } from 'react';

// Styles
import './App.css'

// Components
import Section1 from './components/section1/index'
import Section2 from './components/section2/index'
import Section3 from './components/section3/index'
import Section4 from './components/section4/index'
import Section5 from './components/section5/index'
import Section6 from './components/section6/index'

class App extends Component {
  render() {
    return (
      <div className="h-100">

        <Section1 />

        <Section2 />

        <Section3 />

        <Section4 />
        
        <Section5 />
        
        <Section6 />
      </div>
    );
  }
}

export default App;
