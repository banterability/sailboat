const fs = require('fs');

const getFile = require('./getFile');

const imageTypes = ['gif', 'jpg', 'png', 'jpeg'];

module.exports = directory => new Promise((resolve, reject) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      reject(err);
    } else {
      const imageFiles = files.filter(filename => imageTypes.includes(filename.split('.')[1]))
        .map(filename => getFile(filename, directory));

      Promise.all(imageFiles)
        .then(results => resolve(results))
        .catch(err => reject(err));
    }
  })
})
