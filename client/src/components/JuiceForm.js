import React, { Component } from 'react'

// import tag deps
import ReactTags from 'react-tag-autocomplete'

// import css
import '../CSS/JuiceForm.css'
// import 'font-awesome/css/font-awesome.css'

// import component
import HoverActionButton from './HoverActionButton'

class JuiceForm extends Component {
  constructor() {
    super()

    // bind functions
    this._handleBrandChange = this._handleBrandChange.bind(this)
    this._handleDescriptionChange = this._handleDescriptionChange.bind(this)

    this._handleFlavourAddition = this._handleFlavourAddition.bind(this)
    this._handleFlavourDelete = this._handleFlavourDelete.bind(this)
    this._handleNameChange = this._handleNameChange.bind(this)

    // set initialState
    this.state = {
      newJuice: {
        brand: null,
        description: null,
        flavours: [],
        name: null,

      },
    }
  }

  // event handler for when brand changes
  // sets newJuice.brand state
  _handleBrandChange(event) {

    // updates state
    this.setState({
      newJuice: {
        ...this.state.newJuice,
        brand: event.target.value,
      }
    })

    return
  }

  // event handler for when description changes
  // sets newJuice.description state
  _handleDescriptionChange(event) {

    // updates state
    this.setState({
      newJuice: {
        ...this.state.newJuice,
        description: event.target.value,
      }
    })

    return
  }

  // event handler for when flavour is added
  // sets flavours.flavours state
  _handleFlavourAddition(flavour) {
    const { newJuice } = this.state

    // updates newJuice.flavours state with new flavour tag
    this.setState({
      newJuice: {
        ...newJuice,
        flavours: [
          ...newJuice.flavours,
          flavour,
        ],
      }
    })

    return
  }

  // event handler for when flavour is deleted
  // sets newJuice.flavours state
  _handleFlavourDelete(i) {
    const { newJuice } = this.state

    // updates state with flavour tag i removed
    this.setState({
      newJuice: {
        ...newJuice,
        flavours: [
          ...newJuice.flavours.slice(0, i),
          ...newJuice.flavours.slice(i + 1),
        ]
      }
    })

    return
  }

  // event handler for when Name changes
  // sets newJuice.name state
  _handleNameChange(event) {

    // updates state
    this.setState({
      newJuice: {
        ...this.state.newJuice,
        name: event.target.value,
      }
    })

    return
  }


  _handleSubmit(addJuiceRequest, juice, toggleJuiceForm) {
    addJuiceRequest(juice)
    toggleJuiceForm()

    return
  }

  componentWillMount() {
    const { actions } = this.props

    /* load flavours*/
    actions.getFlavoursRequest()
  }

  render() {

    const {
      actions,
      flavours,
    } = this.props

    // deconstruct state
    const {
      newJuice,
    } = this.state

    return (
      <div className="JuiceForm bg-light-blue">
        <div className="form-body">
          <h1>Add a new juice</h1>

          <div className="flex h-100 w-100 justify-between">

            <div className="flex flex-column justify-around w-100">

              {/* Name Input */}
              <div className="mv2">
                <label
                  className="db"
                  htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 bw1 b--black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Super Good Stuff"
                  onChange={this._handleNameChange} />
              </div>

              {/* Brand Input */}
              <div className="mv2">
                <label
                  className="db"
                  htmlFor="name">
                  Brand
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 bw1 b--black"
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="A Dozen Monkeys"
                  onChange={this._handleBrandChange} />
              </div>

              {/* Description Input */}
              <div className="mv2">
                <label
                  className="db"
                  htmlFor="description">
                  Description
                </label>
                <textArea
                  className="pa2 input-reset ba bg-transparent w-100 bw1 b--black"
                  type="text"
                  name="description"
                  id="description"
                  rows={5}
                  placeholder="write a description for this juice"
                  onChange={this._handleDescriptionChange} />
              </div>

              {/* Flavours Input */}
              <div className="mv2">
                <label
                  className="db"
                  htmlFor="flavours">
                  Flavours
                </label>
                <ReactTags
                  className="react-tags"
                  tags={newJuice.flavours}
                  suggestions={flavours.flavours}
                  handleDelete={this._handleFlavourDelete}
                  handleAddition={this._handleFlavourAddition} />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <HoverActionButton
          action={
            this._handleSubmit.bind(
              null,
              actions.addJuiceRequest,
              newJuice,
              actions.toggleJuiceForm
            )
          }
          backgroundColor='bg-near-white'
          text='Submit'/>
      </div>
    );
  }
}

JuiceForm.propTypes = {
  actions: React.PropTypes.object.isRequired,
  flavours: React.PropTypes.object.isRequired,
}

export default JuiceForm;
