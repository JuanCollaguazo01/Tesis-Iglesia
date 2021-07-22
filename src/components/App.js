import React, { Component } from 'react'

import Header from './Header'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'
import Navigation from './Navigation'

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
    let sideDrawer

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      sideDrawer = <SideDrawer />
    }
    return (
      <div style={{ height: '100%' }}>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content!</p>
        </main>
        <Navigation/>
      </div>
    )
  }
}

export default App


                