import React from 'react';

const FileSize = ({value, suffix}) => {
  return (
    <span className='file-size'>
      {value}
      <span className='unit'>{suffix}</span>
    </span>
  )
}

FileSize.propTypes = {
  value: React.PropTypes.number.isRequired,
  suffix: React.PropTypes.string.isRequired
}

export default FileSize;
