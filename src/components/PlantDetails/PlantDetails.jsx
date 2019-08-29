import React from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#003500',
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

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

const PlantDetails = ({ match }) => 
getfx(match);
(
  <Container>
    <h2>Plant Details</h2>
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>Plant Name</StyledTableCell>
          <StyledTableCell>Remove</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {JSON.stringify(match)}
        {/* {this.props.plantList.map(plant =>
              <StyledTableRow key={plant.id}>
                <StyledTableCell>{plant.name}</StyledTableCell>
              </StyledTableRow>
            )} */}
      </TableBody>
    </Table>
  </Container >
);

getfx = (id) => {
  this.props.dispatch({
    type: 'GET_DETAILS',
    payload: match
  })
}

export default connect()(PlantDetails);