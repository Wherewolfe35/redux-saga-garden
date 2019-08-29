import React from 'react';
import Garden from './components/Garden/Garden';
import { HashRouter as Router, Route } from 'react-router-dom';
//Material-ui
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './App.css';
import PlantDetails from './components/PlantDetails/PlantDetails';

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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1e6026',
      dark: '#003500'
    },
    secondary: {
      main: '#ffa733',
      dark: '#a42d00'
    }
  }
})

const App = () => (
  <Router>
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Container>
          <header className="App-header">
            <h1>Welcome to Saga Garden!</h1>
          </header>
        </Container>
        <Garden />
      </MuiThemeProvider>
    </div>
    <Route path='/plant/:id' component={PlantDetails} />
  </Router>
);

// function PlantDetails(props) {
//   return (
//     <Container>
//       <h2>Plant Details</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Plant Name</StyledTableCell>
//             <StyledTableCell>Remove</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {JSON.stringify(props)}
//           {/* {this.props.reduxState.plantList.map(plant =>
//               <StyledTableRow key={plant.id}>
//                 <StyledTableCell>{plant.name}</StyledTableCell>
//               </StyledTableRow>
//             )} */}
//         </TableBody>
//       </Table>
//     </Container >
//   )
// }

export default App;
