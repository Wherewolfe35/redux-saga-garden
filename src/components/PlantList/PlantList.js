import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantItem from "../PlantItem/PlantItem";
//Material-ui
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const mapStateToProps = reduxState => ({
    reduxState,
});

class PlantList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.props.dispatch({
            type: 'OBTAIN_PLANTS'
        })
    }

    render() {
        return (
            <Container>
                <h3>Plants</h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Plant Name</StyledTableCell>
                            <StyledTableCell>Remove</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.plantList.map(plant =>
                            <PlantItem plant={plant} key={plant.id}/>
                        )}
                    </TableBody>
                </Table>
            </Container >
        );
    }
}

export default connect(mapStateToProps)(PlantList);
