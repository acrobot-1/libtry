import _classCallCheck from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/home/virandry/accordium/project/libtry/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import Label from './Label';

var SelectedLabels =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectedLabels, _Component);

  function SelectedLabels() {
    _classCallCheck(this, SelectedLabels);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectedLabels).apply(this, arguments));
  }

  _createClass(SelectedLabels, [{
    key: "render",
    value: function render() {
      var _this = this;

      var nonMandatoryProps = {
        hasError: this.props.hasError,
        onRemove: this.props.onRemove,
        removeText: this.props.removeText,
        labelClassNames: this.props.labelClassNames
      };
      return React.createElement("div", {
        className: "selected-labels",
        ref: this.props.forwardedRef
      }, this.props.selectedLabels.map(function (label, index) {
        var containerWidth = _this.props.forwardedRef.current.clientWidth;
        console.log('containerWidth', containerWidth);
        return React.createElement(Label, Object.assign({
          key: index,
          labelIndex: index,
          value: label.value,
          title: label.title,
          error: label.error
        }, nonMandatoryProps));
      }));
    }
  }]);

  return SelectedLabels;
}(Component);

export default React.forwardRef(function (props, ref) {
  return React.createElement(SelectedLabels, Object.assign({
    forwardedRef: ref
  }, props));
});