import React from 'react';

import FileListItem from './FileListItem';
import ListFilter from './ListFilter';

class FileList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filteredFiles: this.props.files
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filterString) {
    if (filterString === '') {
      this.setState({filteredFiles: this.props.files})
    } else {
      this.setState({
        filteredFiles: this.props.files.filter(file => {
          return file.name.includes(filterString)
        })
      })
    }
  }

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
          <tr>
            <td colSpan={3}>
              <ListFilter onChange={this.handleChange}/>
            </td>
          </tr>
        </thead>
        <tbody>
          {this.state.filteredFiles.map((file, index) => {
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
