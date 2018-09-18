import React from 'react';
import { saveAs } from 'file-saver/FileSaver';
import { head, dict, tail } from './FileCompose';

export class FileGenerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileReaded: undefined,
      fileName: undefined,
    }
  }

  uploadFile = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) {
      reader.readAsText(file);
      reader.onloadend = (e) => {
        const { result } = reader;
        let ret = head;
        const lines = result.split(/[\r\n]+/g);
        for (const line of lines) {
          const lineSplited = line.replace(/\s\s+/g, ' ').split(' ');
          if (lineSplited.length > 1) {
            const val = lineSplited.slice(1, lineSplited.length).join('    ')
            ret += dict(val)[lineSplited[0]] + '\r\n';
            console.log(ret);
          }
        }
        ret += tail;
        this.setState({
          fileReaded: ret,
        });
      };
      this.setState({ fileName: file.name.split('.').slice(0, -1).join('.'), });
    }
  }

  downloadFile = (event) => {
    const fileToSave = new File([this.state.fileReaded], `${this.state.fileName}.inp`, { type: "text/plain;charset=utf-8" });
    saveAs(fileToSave);
  }

  render() {
    return <span>
      <input type="file"
        name="myFile"
        onChange={this.uploadFile} />
      <button onClick={this.downloadFile}>Download</button>
      <pre>
        <code>
          {this.state.fileReaded}
        </code>
      </pre>

    </span>
  }
}
