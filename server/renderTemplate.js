const fs = require('fs');
const mustache = require('mustache');

module.exports = (template, context) => new Promise((resolve, reject) => {
  fs.readFile(`./server/views/${template}.mustache`, {
    encoding: 'utf-8'
  }, (err, templateString) => {
    if (err) {
      reject(err);
    } else {
      resolve(
        mustache.render(templateString, context)
      )
    }
  })
});
