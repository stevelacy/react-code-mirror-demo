var React = require('react');
var CodeMirror = React.createFactory(require('react-code-mirror'));
require('codemirror/mode/javascript/javascript');
require('codemirror/addon/selection/active-line');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/edit/matchtags');
require('codemirror/keymap/sublime');

var DOM = React.DOM;
var src = 'var myFunc = function() {\n' +
          '\n' +
          '}\n';

var app = React.createClass({
  getInitialState: function() {
    return {
      src: src
    };
  },
  render: function() {
    return DOM.div({
      className: 'wrapper',
    },
      CodeMirror({
        className: 'editor',
        mode: 'javascript',
        theme: 'monokai',
        keyMap: 'sublime',
        autoCloseBrackets: true,
        defaultValue: this.state.src,
        lineNumbers: true,
        styleActiveLine: true,
        lineWrapping: true,
        styleSelectedText: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        viewportMargin: Infinity
      })
    );
  }
});

React.render(React.createFactory(app)(), document.body);
