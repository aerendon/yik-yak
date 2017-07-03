import React, { Component } from 'react';

class Zone extends Component {
  render () {
    return (
      <div>
        <h2><a style={{textDecoration: 'none', color: 'red'}} href="#">{this.props.currentZone.name}</a></h2>
        <span>{this.props.currentZone.zipCode}</span><br/>
        <span>{this.props.currentZone.numComments}</span>
      </div>
    )
  }
}

export default Zone