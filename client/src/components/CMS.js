import React, { Component } from 'react'

// import state management
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/';

// import css
import 'font-awesome/css/font-awesome.css'
import '../CSS/helpers.css'
import '../CSS/CMS.css'

// import components
import Flavours from './Flavours'
import Juices from './Juices'
import Sidebar from './Sidebar'

class CMS extends Component {
  renderMain(actions, flavours, juices, location) {
    return location === 'flavours' ?
      <Flavours
        {...this.props}
        actions={actions}
        flavours={flavours} /> :
      <Juices
        {...this.props}
        actions={actions}
        flavours={flavours}
        juices={juices} />
  }

  render() {
    const {
      actions,
      cms,
      flavours,
      juices,
    } = this.props

    return (
      <div className="CMS bg-near-white pa3 helvetica">
        <Sidebar
          actions={actions} />

        {
          /* render main content */
          this.renderMain(actions, flavours, juices, cms.location)
        }

      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    cms: state.cms,
    flavours: state.flavours,
    juices: state.juices,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CMS);