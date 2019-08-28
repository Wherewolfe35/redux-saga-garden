import React, { Component } from 'react';
import { connect } from "react-redux";

class PlantItem extends Component {
  removePlant = (id) => {
    this.props.dispatch({
      type: 'REMOVE_PLANT',
      payload: id
    })
  }
  render() { 
    return ( 
      <tr key={this.props.plant.id}>
        <td>{this.props.plant.name}</td>
        <td><button onClick={()=>this.removePlant(this.props.plant.id)}>Delete</button></td>
      </tr>
     );
  }
}
 
export default connect()(PlantItem);