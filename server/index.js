const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const getFiles = require('./getFiles');
const App = require('../lib/App');
const renderReact = require('./renderReact');

if (!process.env.IMAGE_PATH) { throw new Error('IMAGE_PATH must be defined'); }
const imagePath = process.env.IMAGE_PATH;

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  getFiles(imagePath, (err, files) => {
    console.log('err', err);

    renderReact(files, reactHtml => {
      res.set('Content-Type', 'text/html');
      res.send(reactHtml);
    });
  });
});

const port = process.env.PORT || 5678;
app.listen(port, () => console.log(`listening on ${port}`));
