import React, { Component } from 'react';
import { connect } from "react-redux";
//Material-ui
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { TableRow, TableCell } from "@material-ui/core";

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.secondary,
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#003500',
    },
  },
}))(TableRow);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
    color: 'white'
  },
}))(TableCell);

class PlantItem extends Component {
  removePlant = (id) => {
    this.props.dispatch({
      type: 'REMOVE_PLANT',
      payload: id
    })
  }
  render() { 
    return ( 
      <StyledTableRow key={this.props.plant.id}>
        <StyledTableCell>{this.props.plant.name}</StyledTableCell>
        <StyledTableCell><Button color="secondary" onClick={()=>this.removePlant(this.props.plant.id)}>Delete</Button></StyledTableCell>
      </StyledTableRow>
     );
  }
}
 
export default connect()(PlantItem);