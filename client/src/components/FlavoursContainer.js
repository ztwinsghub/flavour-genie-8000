import React, { Component } from 'react'

// import components
import Flavour from './Flavour'

class FlavoursContainer extends Component {
  renderFlavours(flavours) {
    return flavours.map((flavour, i) => {
      return <Flavour flavour={flavour} key={i} />
    })
  }

  render() {
    const {
      flavours,
    } = this.props;

    return (
      <div>
        {
          flavours.length === 0 ?
            <p>There's no flavours yet. You should add one!</p> :
            this.renderFlavours(flavours)
        }
      </div>
    )
  }
}

FlavoursContainer.propTypes = {
  flavours: React.PropTypes.array.isRequired,
}

export default FlavoursContainer;
