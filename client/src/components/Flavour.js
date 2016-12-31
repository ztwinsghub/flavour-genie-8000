import React, { Component } from 'react'

// import css
import '../CSS/Flavour.css'

class Flavour extends Component {
  render() {
    const {
      flavour: {
        name,
      }
    } = this.props;

    return (
      <div className="Flavour">
        <p>{name}</p>
      </div>
    );
  }
}

Flavour.propTypes = {
  flavour: React.PropTypes.object.isRequired,
}

export default Flavour;
