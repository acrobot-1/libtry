import _classCallCheck from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';

var LabelContainer = function (_Component) {
  _inherits(LabelContainer, _Component);

  function LabelContainer() {
    _classCallCheck(this, LabelContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(LabelContainer).apply(this, arguments));
  }

  _createClass(LabelContainer, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "auto-complete-label container"
      }, this.props.children);
    }
  }]);

  return LabelContainer;
}(Component);

export { LabelContainer as default };