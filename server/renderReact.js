const ReactDOMServer = require('react-dom/server');

const App = require('../lib/App');

module.exports = initialState => new Promise(resolve => {
  resolve({
    markup: ReactDOMServer.renderToString(App(initialState)),
    state: initialState
  });
});
