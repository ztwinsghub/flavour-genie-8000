import React, { Component } from 'react'

// import css
import '../CSS/FlavourButton.css'

class FlavourButton extends Component {
  render() {
    const {
      action,
      flavour: {
        active,
        name,
      },
    } = this.props;

    return (
      <div className={
        active ?
          'toggle-button ActiveFlavourButton':
          'toggle-button FlavourButton'
        }
        onClick={action}
      >
        <p>{name}</p>
      </div>
    );
  }
}

FlavourButton.propTypes = {
  action: React.PropTypes.func.isRequired,
  flavour: React.PropTypes.object.isRequired,
}

export default FlavourButton;
