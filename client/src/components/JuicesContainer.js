import React, { Component } from 'react'

// import components
import Juice from './Juice'

class JuicesContainer extends Component {
  renderJuices(juices) {
    return juices.map((juice, i) => {
      return <Juice juice={juice} key={i} />
    })
  }

  render() {
    const {
      juices,
    } = this.props;

    return (
      <div>
        {
          juices.length === 0 ?
            <p>There's no juices yet. You should add one!</p> :
            this.renderJuices(juices)
        }
      </div>
    )
  }
}

JuicesContainer.propTypes = {
  juices: React.PropTypes.array.isRequired,
}

export default JuicesContainer;
