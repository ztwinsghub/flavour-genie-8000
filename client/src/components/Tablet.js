import React, { Component } from 'react'

// import state management
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/';

// import css
import 'font-awesome/css/font-awesome.css'
import '../CSS/helpers.css'
import '../CSS/Tablet.css'

// import components
import FlavourButtonsContainer from './FlavourButtonsContainer'
import HoverButton from './HoverButton'
import ResultsContainer from './ResultsContainer'

class Tablet extends Component {
  componentWillMount() {
    const { actions } = this.props

    /* load flavours*/
    actions.getFlavoursRequest()

    /* load juices*/
    actions.getJuicesRequest()
  }

  renderResults(isOpen, juices, results) {
    return isOpen ?
      <ResultsContainer
        juices={juices}
        results={results} /> :
        null
  }

  render() {
    const {
      actions,
      flavours,
      juices,
      search,
    } = this.props;

    return (
      <div className="Tablet bg-near-white pa3 helvetica">
        <h1>Flavour Genie 8000</h1>
        <h2>Select the juice flavours you're interested in</h2>

        <FlavourButtonsContainer
          action={actions.toggleSearchFlavourRequest}
          flavours={flavours.flavours} />

        {
          /* render results */
          this.renderResults(search.resultsIsOpen, juices.juices, search.results)
        }

        <HoverButton
          action={search.resultsIsOpen ? actions.toggleResults : actions.searchRequest.bind(null, search.flavours)}
          backgroundColor={search.resultsIsOpen ? 'bg-near-white' : 'bg-light-blue' }
          icon={search.resultsIsOpen ? 'fa-chevron-left' : 'fa-search' } />

      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    flavours: state.flavours,
    juices: state.juices,
    search: state.search,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tablet);