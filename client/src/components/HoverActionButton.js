import React, { Component } from 'react'

// import css
import '../CSS/HoverActionButton.css'
import 'font-awesome/css/font-awesome.css'

class HoverActionButton extends Component {
  render() {
    const {
      action,
      backgroundColor,
      text,
    } = this.props

    return (
      <div className={`HoverActionButton ${backgroundColor}`}
        onClick={action} >
        <p>{text}</p>
      </div>
    );
  }
}

HoverActionButton.propTypes = {
  action: React.PropTypes.func.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
}

export default HoverActionButton;
