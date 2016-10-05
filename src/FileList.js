const React = require('react');

const FileListItem = require('./FileListItem');

class FileList extends React.PureComponent {
  render() {
    return React.createElement('ul', null,
      this.props.files.map((filename, index) => {
        return React.createElement(FileListItem, {
          filename,
          key: index
        });
      })
    );
  }
}

module.exports = FileList;
