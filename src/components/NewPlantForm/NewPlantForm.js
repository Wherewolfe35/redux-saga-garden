import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
            subfamily: '',
            genus: '',
        }
    }

    handleNameChange = (event, propertyName) => {
        console.log('event happened')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                [propertyName]: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant })
        this.setState({
            newPlant: {
                name: '',
                kingdom: '',
                clade: '',
                order: '',
                family: '',
                subfamily: '',
                genus: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewPlant}>
                    <input type='text' placeholder='Plant Name' value={this.state.newPlant.name} onChange={(event) => this.handleNameChange(event, 'name')} />
                    <input type='text' placeholder='Kingdom' value={this.state.newPlant.kingdom} onChange={(event) => this.handleNameChange(event, 'kingdom')} />
                    <input type='text' placeholder='Clade' value={this.state.newPlant.clade} onChange={(event) => this.handleNameChange(event, 'clade')} />
                    <input type='text' placeholder='Order' value={this.state.newPlant.order} onChange={(event) => this.handleNameChange(event, 'order')} />
                    <input type='text' placeholder='Family' value={this.state.newPlant.family} onChange={(event) => this.handleNameChange(event, 'family')} />
                    <input type='text' placeholder='Subfamily' value={this.state.newPlant.subfamily} onChange={(event) => this.handleNameChange(event, 'subfamily')} />
                    <input type='text' placeholder='Genus' value={this.state.newPlant.genus} onChange={(event) => this.handleNameChange(event, 'genus')} />
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
