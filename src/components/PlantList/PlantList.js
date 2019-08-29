import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantItem from "../PlantItem/PlantItem";
//Material-ui
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
                <h2>Plants</h2>
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
