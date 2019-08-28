import React, { Component } from 'react';

class PlantItem extends Component {
  
  render() { 
    return ( 
      <tr key={this.props.plant.id}>
        <td>{this.props.plant.name}</td>
        <td><button>Delete</button></td>
      </tr>
     );
  }
}
 
export default PlantItem;