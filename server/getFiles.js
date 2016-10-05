const fs = require('fs');

const imageTypes = ['gif', 'jpg', 'png', 'jpeg'];

module.exports = (directory, cb) => {
  fs.readdir(directory, (err, files) => {
    if (err) { return cb(err, null); }

    const results = files.reduce((memo, filename) => {
      imageTypes.includes(filename.split('.')[1])
        ? memo.shown.push(filename)
        : memo.hidden.push(filename);

      return memo;
    }, {
      hidden: [],
      shown: []
    });

    console.log(`Hiding ${results.hidden.length} non-image files`);
    return cb(null, results.shown);
  })
}
