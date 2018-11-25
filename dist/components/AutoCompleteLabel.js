import _classCallCheck from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';

var AutoCompleteLabel =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoCompleteLabel, _Component);

  function AutoCompleteLabel() {
    _classCallCheck(this, AutoCompleteLabel);

    return _possibleConstructorReturn(this, _getPrototypeOf(AutoCompleteLabel).apply(this, arguments));
  }

  _createClass(AutoCompleteLabel, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "auto-complete-label container"
      }, this.props.children);
    }
  }]);

  return AutoCompleteLabel;
}(Component);

export { AutoCompleteLabel as default };