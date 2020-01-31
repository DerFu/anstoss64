var Component = require('choo/component');
var html = require('nanohtml');
var playerBox = require('./playerBox.js');

module.exports = class Info extends Component {
  update() {
    return false;
  }

  createElement() {
    return html`
      <div class="info">
        <h3>player</h3>
        <playerBox></playerBox>
      </div>
    `;
  }
};
