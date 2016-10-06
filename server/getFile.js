const fileSize = require('filesize');
const fs = require('fs');

module.exports = (filename, directory) => new Promise((resolve, reject) => {
  fs.stat(`${directory}/${filename}`, (err, stats) => {
    if (err) {
      reject(err);
    } else {
      resolve({
        createdAt: stats.birthtime.toJSON(),
        name: filename,
        size: fileSize(stats.size, {
          round: 1,
          output: 'object'
        })
      })
    }
  })
});
