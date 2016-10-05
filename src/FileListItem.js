import React from 'react';

const FileListItem = props => {
  const {filename} = props;

  return <li>{filename}</li>;
};

FileListItem.propTypes = {
  filename: React.PropTypes.string.isRequired
};

export default FileListItem;
