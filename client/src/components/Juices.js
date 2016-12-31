import React, { Component } from 'react'

// import components
import HoverButton from './HoverButton'
import JuicesContainer from './JuicesContainer'
import JuiceForm from './JuiceForm'

// import css
import '../CSS/Juices.css'

class Juices extends Component {

  componentWillMount() {
    const { actions } = this.props

    /* load juices*/
    actions.getJuicesRequest()
  }

  renderForm(actions, flavours, formIsOpen) {
    return formIsOpen ?
      <JuiceForm
        actions={actions}
        flavours={flavours} /> :
        null
  }

  render() {
    const {
      actions,
      flavours,
      juices,
    } = this.props;

    return (
      <div className="Juices pa4">
        <h2>Juices</h2>
        <JuicesContainer juices={juices.juices} />

        {
          /* render form */
          this.renderForm(actions, flavours, juices.formIsOpen)
        }

        <HoverButton
          action={actions.toggleJuiceForm}
          backgroundColor={juices.formIsOpen ? 'bg-near-white' : 'bg-light-blue'}
          icon={juices.formIsOpen ? 'fa-close' : 'fa-plus' } />

      </div>
    );
  }
}

Juices.propTypes = {
  actions: React.PropTypes.object.isRequired,
  flavours: React.PropTypes.object.isRequired,
  juices: React.PropTypes.object.isRequired,
}

export default Juices;
