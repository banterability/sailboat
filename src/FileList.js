import React from 'react';

import FileListItem from './FileListItem';

export default class FileList extends React.PureComponent {
  render() {
    return <ul>
      {this.props.files.map((filename, index) => {
        return <FileListItem filename={filename} key={index}/>
      })}
    </ul>;
  }
}
