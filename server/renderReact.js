const ReactDOMServer = require('react-dom/server');

const App = require('../lib/App');

module.exports = (initialState, cb) => {
  cb(ReactDOMServer.renderToStaticMarkup(App(initialState)));
}
