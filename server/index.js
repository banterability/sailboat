const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const getFiles = require('./getFiles');
const App = require('../lib/App');
const renderTemplate = require('./renderTemplate');
const renderReact = require('./renderReact');

if (!process.env.IMAGE_PATH) { throw new Error('IMAGE_PATH must be defined'); }
const imagePath = process.env.IMAGE_PATH;

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  getFiles(imagePath)
    .then(files => renderReact({
      baseUrl: process.env.BASE_URL,
      files
    }))
    .then(({markup, state}) => renderTemplate('index', {
      reactOutput: markup,
      reactState: JSON.stringify(state)
    }))
    .then(html => {
      res.set('Content-Type', 'text/html');
      res.send(html);
    })
    .catch(err => {
      res.status(500).send(err.toString());
    });
});

const port = process.env.PORT || 5678;
app.listen(port, () => console.log(`listening on ${port}`));
