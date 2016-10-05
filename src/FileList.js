import React from 'react';

import FileListItem from './FileListItem';

class FileList extends React.PureComponent {
  render() {
    const {baseUrl, files} = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {this.props.files.map((file, index) => {
            return <FileListItem baseUrl={baseUrl} file={file} key={index}/>
          })}
        </tbody>
      </table>
    );
  }
}

FileList.propTypes = {
  baseUrl: React.PropTypes.string,
  files: React.PropTypes.array.isRequired
}

export default FileList;
