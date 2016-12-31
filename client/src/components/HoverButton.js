import React, { Component } from 'react'

// import css
import '../CSS/HoverButton.css'
import 'font-awesome/css/font-awesome.css'

class HoverButton extends Component {
  render() {
    const {
      action,
      backgroundColor,
      icon,
    } = this.props

    return (
      <div className={`HoverButton ${backgroundColor}`}
        onClick={action} >
        <i className={`fa ${icon} fa-2x`}></i>
      </div>
    );
  }
}

HoverButton.propTypes = {
  action: React.PropTypes.func.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
}

export default HoverButton;
