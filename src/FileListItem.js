const React = require('react');

const FileListItem = props => {
  const {filename} = props;

  return React.createElement('li', null, filename);
};

FileListItem.propTypes = {
  filename: React.PropTypes.string.isRequired
};

module.exports = FileListItem;
