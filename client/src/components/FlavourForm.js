import React, { Component } from 'react'

// import css
import '../CSS/FlavourForm.css'
// import 'font-awesome/css/font-awesome.css'

// import component
import HoverActionButton from './HoverActionButton'

class FlavourForm extends Component {
  constructor() {
    super()

    // bind functions
    this._handleNameChange = this._handleNameChange.bind(this)

    // set initialState
    this.state = {
      newFlavour: {
        name: null,
      }
    }
  }

  // event handler for when Name changes
  // sets newFlavour.name state
  _handleNameChange(event) {

    // updates state
    this.setState({
      newFlavour: {
        ...this.state.newFlavour,
        name: event.target.value,
      }
    })

    return
  }


  _handleSubmit(addFlavourRequest, flavour, toggleFlavourForm) {
    addFlavourRequest(flavour)
    toggleFlavourForm()

    return
  }

  render() {
    const { actions } = this.props

    // deconstruct state
    const {
      newFlavour,
    } = this.state

    return (
      <div className="FlavourForm bg-light-blue">
        <div className="form-body">
          <h1>Add a new flavour</h1>

          <div className="flex h-100 w-100 justify-between">
            <div className="flex flex-column justify-around w-100">

              {/* Name Input */}
              <div className="mv2">
                <label
                  className="db"
                  htmlFor="name">
                  Flavour
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 bw1 b--black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Grape"
                  onChange={this._handleNameChange} />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <HoverActionButton
          action={
            this._handleSubmit.bind(
              null,
              actions.addFlavourRequest,
              newFlavour,
              actions.toggleFlavourForm
            )
          }
          backgroundColor='bg-near-white'
          text='Submit'/>
      </div>
    );
  }
}

FlavourForm.propTypes = {
  actions: React.PropTypes.object.isRequired,
}

export default FlavourForm;
