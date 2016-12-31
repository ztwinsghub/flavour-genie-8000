import React, { Component } from 'react'

// import ui dep
import Dropzone from 'react-dropzone'

class ImageUpload extends Component {
  render() {
    const {
      image,
    } = this.props

    // render upload ui by default
    if (image.isUploaded === null) {
      return (
        <div className="flex flex-column items-center justify-around mr4 w-100">
          <img
            src="https://placehold.it/150x150"
            className="br-100 h5 w5" alt="juice" />
          <Dropzone
            accept="image/*"
            className="w-100 b--dashed vh-25 items-center flex"
            onDrop={this._handleImageUpload}
            maxSize={5242880}
            multiple={false}>
            <div className="tc w-100">
              Drop an image here, or click to upload an image of this juice.
            </div>
          </Dropzone>
        </div>
      )
    }

    // else render image ui
    else {
      return (
        <div className="flex flex-column items-center justify-around ml4">
          <img
            src={image.source ? image.source : "https://placehold.it/150x150"}
            className="br-100 h5 w5" alt="juice" />
            <a
              className="dim link black grow br-100"
              onClick={this._handleRemoveUpload}>
              <i className="fa fa-times">
              </i>
            </a>
        </div>
      )
    }
  }
}

ImageUpload.propTypes = {
  image: React.PropTypes.object.isRequired,
}

export default ImageUpload;
