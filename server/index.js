const express = require('express');
const fs = require('fs');

const imagePath = process.env.IMAGE_PATH;

const app = express();

app.get('/', (req, res) => {
  fs.readdir(imagePath, (err, files) => {
    console.log('err', err);
    res.send(files);
  })
});

const port = process.env.PORT || 5678;
app.listen(port, () => console.log(`listening on ${port}`));
