import * as React from 'react'
import { Component } from "react"

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo center">{this.props.children}</a>
        </div>
      </nav>
    )
  }
}

export default Header
