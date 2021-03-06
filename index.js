var css = require('sheetify');
var choo = require('choo');

css('todomvc-common/base.css');
css('todomvc-app-css/index.css');

var app = choo();
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')());
}
app.use(require('./stores/todos'));

app.route('/', require('./views/main'));

module.exports = app.mount('body');
