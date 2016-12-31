import React, { Component } from 'react'

// import libs
import { BrowserRouter, Match } from 'react-router'

// import component
import CMS from './CMS'
import Tablet from './Tablet'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Tablet} />
          <Match exactly pattern="/cms" component={CMS} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
