import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Fab from '@material-ui/core/Fab';
import { Container } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

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
            <Container>
                <h2>Help grow our Garden!</h2>
                <form onSubmit={this.addNewPlant}>
                    <TextField variant='outlined' margin='dense' label='Plant Name' 
                    value={this.state.newPlant.name} onChange={(event) => this.handleNameChange(event, 'name')} />
                    <TextField variant='outlined' margin='dense' label='Kingdom' 
                    value={this.state.newPlant.kingdom} onChange={(event) => this.handleNameChange(event, 'kingdom')} />
                    <TextField variant='outlined' margin='dense' label='Clade' 
                    value={this.state.newPlant.clade} onChange={(event) => this.handleNameChange(event, 'clade')} />
                    <TextField variant='outlined' margin='dense' label='Order' 
                    value={this.state.newPlant.order} onChange={(event) => this.handleNameChange(event, 'order')} />
                    <TextField variant='outlined' margin='dense' label='Family' 
                    value={this.state.newPlant.family} onChange={(event) => this.handleNameChange(event, 'family')} />
                    <TextField variant='outlined' margin='dense' label='Subfamily' 
                    value={this.state.newPlant.subfamily} onChange={(event) => this.handleNameChange(event, 'subfamily')} />
                    <TextField variant='outlined' margin='dense' label='Genus' 
                    value={this.state.newPlant.genus} onChange={(event) => this.handleNameChange(event, 'genus')} /> 
                    <br />
                    <Fab variant='extended' size="medium" color="primary" aria-label="Add New Plant" type='submit' className='submitBtn'>Add New Plant</Fab>
                </form>
            </Container>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
