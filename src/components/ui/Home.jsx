import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class Home extends React.Component {
  render() {
    return (
      <Paper>
        {/* <Typography variant="headline" component="h1">
        ACIG
        </Typography>*/}
        <Typography component="p">
        Para começar, clique no menu e escolha seu metodo
        </Typography> 
        
      </Paper>
    );
  }
}
