import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantItem from "../PlantItem/PlantItem";

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
            <div>
                <h3>This is the plant list</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Plant Name</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.plantList.map(plant =>
                            <PlantItem plant={plant} key={plant.id}/>
                        )}
                    </tbody>
                </table>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlantList);
