const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

if (!process.env.IMAGE_PATH) { throw new Error('IMAGE_PATH must be defined'); }
const imagePath = process.env.IMAGE_PATH;

const imageTypes = ['gif', 'jpg', 'png', 'jpeg'];

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  fs.readdir(imagePath, (err, files) => {
    console.log('err', err);

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
    res.send(results.shown);
  })
});

const port = process.env.PORT || 5678;
app.listen(port, () => console.log(`listening on ${port}`));
