import React from 'react'
// import {Navbar} from './components'
import Routes from './routes'

export default class Main extends React.Component {
  constructor(){
    super()
  }

  render () {
    return(
      <div>
        {/* <Navbar /> */}
        <Routes />
    </div>
    )
  }
}
