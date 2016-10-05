const ReactDOMServer = require('react-dom/server');

const App = require('../lib/App');

module.exports = initialState => new Promise(resolve => {
  resolve(
    ReactDOMServer.renderToStaticMarkup(
      App(initialState)
    )
  );
});
