import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FileGenerator } from './FileGenerator/FileGenerator';
import { Card } from '@material-ui/core';
import { Grid } from 'react-flexbox-grid';

export default class Home extends React.Component {
  render() {
    return (
      <Paper>
        {/* <Typography variant="headline" component="h1">
        ACIG
        </Typography>
        <Typography component="p">
        Another Chemical Input Generator
        </Typography> */}
        <FileGenerator />
      </Paper>
    );
  }
}
