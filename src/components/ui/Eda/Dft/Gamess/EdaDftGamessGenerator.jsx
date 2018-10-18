import React from 'react';
import { Button, Card, CardContent, CardActions, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, TextField } from '@material-ui/core';
import { Grid } from 'react-flexbox-grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { saveAs } from 'file-saver/FileSaver';
import { head, dict, tail } from './FileCompose';
import '../../../layout/CodeStyle.css';

export default class EdaDftGamessGenerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileReaded: [],
      fileName: [],
      head,
    }
  }

  uploadFile = (event) => {
    let files = event.target.files;
    for (const file of files) {
      let reader = new FileReader();
      if (file) {
        reader.readAsText(file);
        reader.onloadend = (e) => {
          const { result } = reader;
          let ret = this.state.head + '\r\n';
          const lines = result.split(/[\r\n]+/g);
          for (const line of lines) {
            const lineSplited = line.replace(/\s\s+/g, ' ').split(' ');
            if (lineSplited.length > 1) {
              const val = lineSplited.slice(1, lineSplited.length).join('    ')
              ret += dict(val)[lineSplited[0]] + '\r\n\r\n';
            }
          }
          ret += tail;
          this.state.fileReaded.push(ret);
        };
        this.state.fileName.push(file.name.split('.').slice(0, -1).join('.'));
      }
    }
  }

  downloadFile = (event) => {
    for (let i = 0; i < this.state.fileName.length; i++) {
      const fileToSave = new File([this.state.fileReaded[i]], `${this.state.fileName[i]}.inp`, { type: "text/plain;charset=utf-8" });
      saveAs(fileToSave);
    }
  }

  handleChangeHead = (event) => {
    console.log(event.target.value);
    this.setState({
      head: event.target.value,
    });
  }

  render() {
    return (
      <Grid fluid>
        <Card>
          <CardContent>
            <TextField
              id="multiline-flexible"
              label="Cabeçalho"
              multiline
              rows={head.split('\n').length}
              defaultValue={head}
              fullWidth
              onChange={this.handleChangeHead}
              margin="normal"
            />
            <input type="file"
              name="myFile"
              multiple
              onChange={this.uploadFile} />
            {this.state.fileReaded &&
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  Preview
                  </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <pre>
                    <code>
                      {this.state.fileReaded}
                    </code>
                  </pre>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            }

          </CardContent>
          <CardActions>
            <Button
              onClick={this.downloadFile}
              variant="raised"
              color="primary"
              disabled={!this.state.fileReaded}
            >Download</Button>
          </CardActions>
        </Card>
      </Grid>);
  }
}
