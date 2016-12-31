import React, { Component } from 'react'

// import css
import '../CSS/Sidebar.css'

class Sidebar extends Component {
  render() {
    const {
      actions,
    } = this.props

    return (
      <div className="Sidebar">
        <img src="/images/logo.png" alt="logo" />
        <ul className="routes">
          <li className="route"
            onClick={actions.navigate.bind(null, "flavours")}>
            Flavours
          </li>
          <li className="route"
            onClick={actions.navigate.bind(null, "juices")}>
            Juices
          </li>
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  actions: React.PropTypes.object.isRequired,
}

export default Sidebar;
