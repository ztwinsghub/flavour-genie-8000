import React, { Component } from 'react'

// import components
import Flavour from './Flavour'

// import css
import '../CSS/Juice.css'

class Juice extends Component {

  renderFlavours(flavours) {
    return flavours.map((flavour, i) => {
      return <Flavour flavour={flavour} key={i} />
    })
  }

  render() {
    const {
      juice: {
        brand,
        description,
        flavours,
        name,
      },
    } = this.props;

    return (
      <div className="Juice">
        <h2>{name} - {brand}</h2>
        <p>{description}</p>
        <h3>flavours: </h3>

        {
          /* render flavours */
          this.renderFlavours(flavours)
        }
      </div>
    );
  }
}

Juice.propTypes = {
  juice: React.PropTypes.object.isRequired,
}

export default Juice;
