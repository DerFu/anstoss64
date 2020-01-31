var html = require('nanohtml');

var Info = require('../components/info');

module.exports = mainView;

function mainView(state, emit) {
  return html`
    <body>
      ${state.cache(Info, 'info').render({ color: 0 })}
    </body>
  `;
}
