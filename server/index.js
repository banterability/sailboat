const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const getFiles = require('./getFiles');
const App = require('../lib/App');

if (!process.env.IMAGE_PATH) { throw new Error('IMAGE_PATH must be defined'); }
const imagePath = process.env.IMAGE_PATH;

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  getFiles(imagePath, (err, files) => {
    console.log('err', err);

    res.set('Content-Type', 'text/html');
    res.send(ReactDOMServer.renderToStaticMarkup(App(files)))
  });
});

const port = process.env.PORT || 5678;
app.listen(port, () => console.log(`listening on ${port}`));
