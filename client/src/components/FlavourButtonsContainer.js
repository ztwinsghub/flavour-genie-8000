import React, { Component } from 'react'

// import components
import FlavourButton from './FlavourButton'

// import css
import '../CSS/FlavourButtonsContainer.css'

class FlavourButtonsContainer extends Component {
  renderFlavours(action, flavours) {
    return flavours.map((flavour, i) => {
      return (
        <FlavourButton
          action={action.bind(null, flavour, i)}
          flavour={flavour}
          i={i}
          key={i} />
      )
    })
  }

  render() {
    const {
      action,
      flavours,
    } = this.props;

    return (
      <div className="FlavourButtonsContainer">
        {
          flavours.length === 0 ?
            <p>There's no flavours yet. Someone should add one...</p> :
            this.renderFlavours(action, flavours)
        }
      </div>
    )
  }
}

FlavourButtonsContainer.propTypes = {
  flavours: React.PropTypes.array.isRequired,
}

export default FlavourButtonsContainer;