const fs = require('fs');
const mustache = require('mustache');

module.exports = (template, context, cb) => {
  fs.readFile(`./server/views/${template}.mustache`, {
    encoding: 'utf-8'
  }, (err, templateString) => {
    if (err) { cb(err, null); }

    cb(null, mustache.render(templateString, context))
  })
}
