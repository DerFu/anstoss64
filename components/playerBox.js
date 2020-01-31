var Component = require('choo/component');
var html = require('nanohtml');

module.exports = class PlayerBox extends Component {
  update() {
    return false;
  }

  createElement() {
    return html`
      <div class="player-box">
        <p>Player ${color}</p>
      </div>
    `;
  }
};
