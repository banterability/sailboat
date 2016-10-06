import React from 'react';

import FileSize from './FileSize';
import Timestamp from './Timestamp';

class FileListItem extends React.PureComponent {
  render() {
    const {
      baseUrl,
      file: {createdAt, name, size}
    } = this.props;

    const url = baseUrl
      ? `${baseUrl}/${name}`
      : name;

    return (
      <tr>
        <td className='name'>
          <a href={url}>{name}</a>
        </td>

        <td className='size'>
          <FileSize {...size}/>
        </td>

        <td className='createdAt'>
          <Timestamp date={createdAt}/>
        </td>
      </tr>
    );
  }
};

FileListItem.propTypes = {
  baseUrl: React.PropTypes.string,
  file: React.PropTypes.shape({
    createdAt: React.PropTypes.string.isRequred,
    name: React.PropTypes.string.isRequired
  })
};

export default FileListItem;
