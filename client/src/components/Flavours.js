import React, { Component } from 'react'

// import components
import FlavourForm from './FlavourForm'
import FlavoursContainer from './FlavoursContainer'
import HoverButton from './HoverButton'

// import css
import '../CSS/Flavours.css'

class Flavours extends Component {
  componentWillMount() {
    const { actions } = this.props

    /* load flavours*/
    actions.getFlavoursRequest()
  }

  renderForm(actions, formIsOpen) {
    return formIsOpen ?
      <FlavourForm
        actions={actions} /> :
        null
  }

  render() {
    const {
      actions,
      flavours,
    } = this.props;

    return (
      <div className="Flavours pa4">
        <h1>Flavours</h1>
        <FlavoursContainer flavours={flavours.flavours} />

        {
          /* render form */
          this.renderForm(actions, flavours.formIsOpen)
        }

        <HoverButton
          action={actions.toggleFlavourForm}
          backgroundColor={flavours.formIsOpen ? 'bg-near-white' : 'bg-light-blue'}
          icon={flavours.formIsOpen ? 'fa-close' : 'fa-plus' } />

      </div>
    );
  }
}

Flavours.propTypes = {
  actions: React.PropTypes.object.isRequired,
  flavours: React.PropTypes.object.isRequired,
}

export default Flavours;

