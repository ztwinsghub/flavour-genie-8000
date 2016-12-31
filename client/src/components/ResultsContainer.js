import React, { Component } from 'react'

// import components
import Juice from './Juice'

// import css
import '../CSS/ResultsContainer.css'

class ResultsContainer extends Component {
  renderResults(juices, results) {

    // render juices
    return results.map((result, i) => {
      const juice = getJuiceById(result, juices)

      // handle if there is a juice returned by the server
      // but not loaded on the client
      if (juice === null) {
        return (
          <p key={i}>
            Sorry... there was an error. Try refreshing the page
          </p>
        )
      }

      // render juice
      return (
        <Juice
          juice={juice}
          key={i} />
      )
    })
  }

  render() {
    const {
      juices,
      results,
    } = this.props;

    return (
      <div className="ResultsContainer bg-light-blue">
        <h1>Search Results</h1>
        <div className="results-body">
          {
            /* handle default state  */
            results.length === 0 ?
              <p>Sorry... there were no matches. Please try other flavours</p> :
              this.renderResults(juices, results)
          }

        </div>
      </div>
    )
  }
}

ResultsContainer.propTypes = {
  juices: React.PropTypes.array.isRequired,
  results: React.PropTypes.array,
}

export default ResultsContainer;

// helper functions

// get Juice data by id
function getJuiceById(_id, juices) {
  const juice = juices.reduce((match, juice, i) => {
    if (juice._id === _id) {
      return juice
    }

    return match
  }, null)

  return juice
}