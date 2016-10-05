const fs = require('fs');

const imageTypes = ['gif', 'jpg', 'png', 'jpeg'];

module.exports = directory => new Promise((resolve, reject) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      reject(err);
    } else {
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
      resolve(results.shown);
    }
  })
})
